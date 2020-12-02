/**
 * Vẽ biểu đồ bằng thư viện Highcharts.
 */
function buildHighchartsCloud(data) {

    /**
     * Find min and max weight using reduce on data array
     */
    let minWeight = data.reduce(
        (min, word) => (word.weight < min ? word.weight : min),
        data[0].weight
    );
    let maxWeight = data.reduce(
        (max, word) => (word.weight > max ? word.weight : max),
        data[0].weight
    );

    /**
     * Just a simple lineral scale function
     */
    let makeScale = function (domain, range) {
        let minDomain = domain[0];
        let maxDomain = domain[1];
        let rangeStart = range[0];
        let rangeEnd = range[1];

        return (value) => {
            return rangeStart + (rangeEnd - rangeStart) * ((value - minDomain) / (maxDomain - minDomain));
        }
    };

    let scale = makeScale([minWeight, maxWeight], [0.3, 1]);

    /**
     * Creating a new, scaled data array
     */
    let scaledData = data.map(word =>
        ({
            name: word.name,
            weight: word.weight,
            color: `rgba(60, 170, 200, ${scale(word.weight)})`
        })
    );


    Highcharts.chart('wordcloudContainerHighcharts', {
        chart: {
            backgroundColor: 'transparent',
            height: 210
        },
        series: [
            {
                name: 'Số lượng tin',
                type: 'wordcloud',
                data: data,

                // Hiển thị theo màu sắc được tính toán
                //data: scaledData,

                /*
                // Chỉ hiển thị ngang
                rotation: {
                    from: 0,
                    to: 0,
                },

                // Hạn chế các chữ quá bé
                minFontSize: 12,
                maxFontSize: 32,

                // Thiết lập lại font chữ hỗ trợ tiếng Việt
                style: {
                    fontFamily: 'serif',
                },
                */
            }
        ],
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            wordcloud: {
                style: {
                    // Thiết lập lại font để hiển thị tiếng Việt cho đẹp
                    fontFamily: 'serif' // Arial, Helvetica, sans-serif
                }
            }
        }
    });
}

/**
 * 
 * @param {Array} data Mảng dữ liệu, mỗi phần tử dạng { "text", "weight" }
 */
function buildJQCloud(data) {
    $('#wordcloudContainerJqcloud2').jQCloud(data);
}

function init() {
    let data = [{ "name": "hải quân", "weight": 26 }, { "name": "số", "weight": 21 }, { "name": "an ninh mạng", "weight": 13 }, { "name": "máy bay", "weight": 12 }, { "name": "vũ khí", "weight": 12 }, { "name": "đảo", "weight": 11 }, { "name": "tt", "weight": 10 }, { "name": "chính trị", "weight": 10 }, { "name": "buôn lậu", "weight": 9 }, { "name": "sản phẩm", "weight": 7 }, { "name": "sữa", "weight": 6 }, { "name": "khánh hoà", "weight": 6 }, { "name": "dân tộc", "weight": 6 }, { "name": "tư", "weight": 6 }, { "name": "tên lửa", "weight": 6 }, { "name": "hàng không", "weight": 5 }, { "name": "coca", "weight": 5 }, { "name": "cola", "weight": 5 }, { "name": "cam ranh", "weight": 5 }, { "name": "ngân hàng", "weight": 4 }];
    //let data = [{ "keyword": "đảng cộng sản nhật bản", "score": 0.962963, "count": 27 }, { "keyword": "cách mạng cuba", "score": 0.8333333, "count": 6 }, { "keyword": "lập chiến công", "score": 0.51282054, "count": 39 }, { "keyword": "tô lâm", "score": 0.4224138, "count": 116 }, { "keyword": "táo quân", "score": 0.24731183, "count": 93 }, { "keyword": "dương bích liên", "score": 0.23076923, "count": 13 }, { "keyword": "phạm bình minh", "score": 0.19101124, "count": 89 }, { "keyword": "fever", "score": 0.17857143, "count": 28 }, { "keyword": "nguyễn đăng quang", "score": 0.16883117, "count": 77 }, { "keyword": "fake news", "score": 0.14545454, "count": 55 }, { "keyword": "báo vnexpress", "score": 0.13725491, "count": 51 }, { "keyword": "copenhagen", "score": 0.09090909, "count": 22 }, { "keyword": "bộ trưởng ngoại giao", "score": 0.08571429, "count": 210 }, { "keyword": "valverde", "score": 0.06896552, "count": 29 }, { "keyword": "nhà giáo", "score": 0.057613168, "count": 486 }, { "keyword": "dự báo thời tiết", "score": 0.052173913, "count": 345 }, { "keyword": "đồng tâm", "score": 0.052091554, "count": 1267 }, { "keyword": "phó thủ tướng", "score": 0.047477745, "count": 1011 }, { "keyword": "thiên đình", "score": 0.046875, "count": 64 }, { "keyword": "đại biểu quốc hội", "score": 0.04423077, "count": 520 }, { "keyword": "sinh tử", "score": 0.039918117, "count": 977 }, { "keyword": "odessa", "score": 0.03875969, "count": 129 }, { "keyword": "tiến lợi", "score": 0.03846154, "count": 104 }, { "keyword": "đặng tiểu bình", "score": 0.03846154, "count": 260 }, { "keyword": "unesco", "score": 0.037037037, "count": 243 }, { "keyword": "đại biểu", "score": 0.036945812, "count": 1624 }, { "keyword": "gián điệp", "score": 0.03468208, "count": 173 }, { "keyword": "nước đang phát triển", "score": 0.03305785, "count": 242 }, { "keyword": "tập cận bình", "score": 0.028571429, "count": 875 }, { "keyword": "bầu đức", "score": 0.026666667, "count": 75 }];

    // Giới hạn 30 bản ghi
    data = data.slice(0, 30);

    // Highcharts sử dụng thuộc tính "name", còn jQCloud2 lại sử dụng thuộc tính "text"
    data.forEach(e => {
        e.text = e.name;

        /*
        e.text = e.keyword;
        e.name = e.keyword;
        e.weight = e.score;
        if (e.weight < 1) {
            //e.weight = 1;
        }
        */
    });

    buildHighchartsCloud(data);

    buildJQCloud(data);
}

init();
