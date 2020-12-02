const App = {
    template: `
<div>
    <div class="text-red mb-3 d-none" v-showx="isArchivePage">
        Chú ý: Các bài viết mới đang ở tình trạng bản nháp.
    </div>

    <form @submit.prevent="searchPosts()">
        <input type="text"
                ref="queryInput"
                v-model="query"
                placeholder="Search..."
                spellcheck="false"
                class="w-100 mb-2 query"
                autocomplete="off"
                @input="processFilterPosts()"/>
    </form>

    <label class="custom-control custom-checkbox custom-control-animated custom-control-highlighted custom-control-outlined mt-3 mb-3">
        <input type="checkbox"
                class="custom-control-input"
                v-model="isArchivePage"
                @change="processFilterPosts()">
        <span class="custom-control-label pt-1 pl-2">
            Hiển thị archive
        </span>
    </label>

    <p class="text-muted text-right font-size-0.875 mt-2"
            v-show="executedTime != null">
        Tìm thấy {{filterPosts.length}} bài viết trong {{executedTime}}ms
    </p>

    <ul class="list list-unstyled">
        <li class="d-flex mb-5"
                :id="'post' + curentPostIndex + '' + idx"
                v-for="(p, idx) in shownPosts">
            <img :src="'images/' + p.thumb"
                    class="thumb mr-3 mt-2">

            <div class="info">
                <div class="mb-2">
                    <a class="title text-blue font-size-1.25"
                            :href="(isArchivePage ? 'archive/' : 'posts/') + p.path + '/'">
                        <span v-html="highlightText(p.title)"></span>
                    </a>
                </div>
                
                <div class="description text-muted mt-1"
                        v-html="highlightText(p.description)"></div>

                <div class="mt-1">
                    <a class="text-body font-size-0.875 text-decoration-none"
                            :href="(isArchivePage ? 'archive/' : 'posts/') + p.path + '/'">
                        <span v-html="highlightText(p.path)"></span>
                    </a>
                </div>

                <div class="date text-success mt-1 font-size-0.875"
                        v-if="p.date">
                    <img src="/images/icon/calendar.svg"
                            style="width: 0.5rem;"
                            class="mr-1"/>
                    {{normalizeDate(p.date)}}
                </div>
            <div>
        </li>
    </ul>
</div>`,

    data () {
        return {
            // Là trang posts hay là trang archive
            isArchivePage: false,

            // Dữ liệu sau khi đã được lọc theo tag hoặc xâu tìm kiếm
            filterPosts: [],

            // Dữ liệu hiển thị từng trang
            shownPosts: [],

            // Chỉ số bài viết hiện tại
            curentPostIndex: 0,

            // Đánh dấu có đang xử lý hay không (để không xử lý nhiều lần)
            isLoadingMorePosts: false,

            query: '',

            executedTime: null
        };
    },

    computed: {
        regex () {
            return FullTextSearch.createPrefixSubRegex(this.query);
        },

        /**
         * Toàn bộ dữ liệu
         */
        allContentList () {
            return this.isArchivePage ? allArchive : allPosts;
        }
    },

    /**
     * Khởi tạo dữ liệu.
     */
    created () {
        // Trang archive sẽ có thêm tham số archive=true
        const archive = CommonUtils.getUrlParameter('archive');
        this.isArchivePage = !!archive;

        ContentDataProcessor.updateThumbnailImageOfPosts(allPosts);
        ContentDataProcessor.updateThumbnailImageOfPosts(allArchive);
        ContentDataProcessor.sortPosts(allPosts);
        ContentDataProcessor.normalizeDateOfPosts(allPosts);

        const query = CommonUtils.getUrlParameter('query');
        // console.log(query);
        this.query = query || '';
    },

    mounted () {
        this.processFilterPosts();
        this.setTitle();
        this.listenToScrollEvent();
        this.listenToPopstate();
        this.initFocus();
        this.addImagePrefetchLinks();
    },

    methods: {
        /**
         * Hiển thị highlight tìm kiếm.
         * @param {String} text Xâu gốc hiển thị
         */
        highlightText (text) {
            if (!this.query) {
                return text;
            }
            return text.replace(this.regex, (match) => {
                if (match.startsWith(' ')) {
                    return ` <span class="bg-yellow text-body">${match.trim()}</span>`;
                } else {
                    return `<span class="bg-yellow text-body">${match}</span>`;
                }
            });
        },

        normalizeDate (d) {
            return CommonUtils.normalizeDate(d);
        },

        /**
         * Lọc các bài viết theo từ khóa tìm kiếm.
         */
        processFilterPosts () {
            const startTime = new Date();

            // Từ khóa tìm kiếm
            const query = this.query.toLowerCase();

            // Tiến hành lọc theo từ khóa
            if (!query) {
                this.filterPosts = this.allContentList;
            } else {
                this.filterPosts = FullTextSearch.splitSearch(this.query, this.allContentList);
            }

            // Bắt đầu hiển thị ra cho người dùng
            this.curentPostIndex = 0;
            this.shownPosts = [];

            const endTime = new Date();
            this.executedTime = endTime - startTime;

            this.bindPosts();
        },

        searchPosts () {
            // blur ô nhập xâu tìm kiếm để ẩn keyboard trên mobile
            this.$refs.queryInput.blur();

            this.setTitle();

            // Lưu trạng thái của trang
            const state = {
                query: this.query
            };
            const url = (this.isArchivePage ? '?archive=true&' : '?') + 'query=' + this.query.toLowerCase();
            history.pushState(state, null, url);
        },

        /**
         * Đổi title.
         */
        setTitle () {
            document.title = (this.isArchivePage ? 'Archive' : 'Posts') +
                (this.query ? ` "${this.query}"` : '');
        },

        listenToPopstate () {
            // Người dùng nhấn nút "Back" hoặc "Forward"
            window.addEventListener('popstate', (evt) => {
                // Lấy nội dung nếu có địa chỉ
                // Thiết lập lại xâu tìm kiếm
                if (evt.state && evt.state.query) {
                    // Lấy địa chỉ ở state
                    this.query = evt.state.query;
                } else {
                    this.query = '';
                }
                this.setTitle();

                // Tìm kiếm lại
                this.processFilterPosts();
            });
        },

        initFocus () {
            this.$refs.queryInput.focus();
        },

        listenToScrollEvent () {
            window.addEventListener('scroll', this.checkLoadMorePosts);
        },

        /**
         * Hiển thị tất cả các post luôn 1 lần.
         */
        bindPosts () {
            // console.log(this.filterPosts.length);
            // Nếu đã hết bản ghi
            if (this.curentPostIndex >= this.filterPosts.length) {
                return;
            }

            // Đánh dấu đang xử lý
            this.isLoadingMorePosts = true;

            // Chỉ lấy ít bản ghi thôi, nếu không sẽ bị chậm
            const morePostNumber = 20;

            this.shownPosts.push(...this.filterPosts.slice(this.curentPostIndex, this.curentPostIndex + morePostNumber));

            // Tăng chỉ số
            this.curentPostIndex += morePostNumber;

            // Đánh dấu đã xử lý xong
            this.isLoadingMorePosts = false;
        },

        /**
         * Kiểm tra load bản ghi khi scroll.
         */
        checkLoadMorePosts () {
            // Nếu đang xử lý rồi thì thôi
            if (this.isLoadingMorePosts) {
                return;
            }

            // Tính toán xem nếu scroll đến gần cuối trang thì load thêm bản ghi
            const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (height - scrolled < 100) {
                this.bindPosts();
            }
        },

        /**
         * Thêm các link prefetch để hiển thị ảnh các thể loại nhanh.
         */
        addImagePrefetchLinks () {
            for (const category in CAT_THUMBS) {
                if (CAT_THUMBS.hasOwnProperty(category)) {
                    const imageLink = CAT_THUMBS[category];
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = 'images/' + imageLink;
                    document.head.appendChild(link);
                }
            }
        }
    }
};

try {
    new Vue({
        el: '#app',
        components: {
            App
        }
    });
} catch (ex) {
    alert(ex);
}
