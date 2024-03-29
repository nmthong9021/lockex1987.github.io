/*
manifest.json:
    "content_scripts": [
        {
            "matches": [
                "*://*.nettruyen.com/*"
            ],
            "js": [
                "js/utils.js",
                "js/album/nettruyen.js"
            ]
        }
    ],
*/
import GetLinksUtils from '../utils.js';

/**
 * Lấy danh sách chương.
 */
function getChaptersNettruyen(doc) {
    return GetLinksUtils.getChaptersFromCssSelector('#nt_listchapter a', doc);
}

/**
 * Xử lý từng chương.
 * @param {String} chapterUrl URL của chương
 * @param {String} chapterNo Số thứ tự chương (thư mục lưu)
 * @param {Function} callbackFunc Hàm callback sau khi thực hiện xong
 */
async function processChapterNettruyen(chapterUrl, chapterNo, callbackFunc) {
    const blackList = [
        'quang%2Bcao',
        'thank',
        'banner',
        'BANNER',
        'donate',
        'credit',
        'tuyenns'
    ];

    const doc = await GetLinksUtils.getDocumentFromUrl(chapterUrl);
    const images = [];
    doc.querySelectorAll('.page-chapter img').forEach(imgTag => {
        const imageUrl = imgTag.src;
        if (!GetLinksUtils.isExtraImage(imageUrl, blackList)) {
            const fileExtension = GetLinksUtils.getImageExtension(imageUrl);
            images.push({
                url: imageUrl,
                name: GetLinksUtils.createLocalFileName(chapterNo, images.length, fileExtension)
            });
        }
    });

    // Chờ 5 giây rồi mới crawl tập mới, nếu không sẽ bị tưởng là robot và chặn
    callbackFunc(images, 5 * 1000);
}

/**
 * Lấy ảnh của một chương truyện cụ thể nào đó.
 */
function getImagesOfSingleChapter() {
    const chapterNo = GetLinksUtils.extractChapterNumber(document.title);
    const images = [];
    const blackList = [];
    document.querySelectorAll('.page-chapter img').forEach(imgTag => {
        const url = imgTag.src;
        if (!GetLinksUtils.isExtraImage(url, blackList)) {
            const fileExtension = GetLinksUtils.getImageExtension(url);
            images.push({
                url: url,
                name: GetLinksUtils.createLocalFileName(chapterNo, images.length, fileExtension)
            });
        }
    });

    if (images.length) {
        const text = JSON.stringify(images);
        const fileName = `single downloads ${chapterNo}.json`;
        CommonUtils.saveTextAsFile(text, fileName);
    }
}

export {
    getChaptersNettruyen,
    processChapterNettruyen
};

// Lắng nghe các sự kiện từ Extension
/*
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message == 'getImagesSingle') {
        getImagesOfSingleChapter();
    }
});
*/

/**
 * Mở nhiều tab, chờ cho các tab lấy hết xong dữ liệu, sau đó lấy danh sách ảnh của từng tab.
 * Trong một số trường hợp, chúng ta phải chờ trang web load xong ảnh thì mới lấy đúng danh sách ảnh.
 * Ví dụ khi ảnh không có.
 */
/*
document.querySelector('#getImagesSingleButton').addEventListener('click', () => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, { message: 'getImagesSingle' });
        }
    });
});
*/
