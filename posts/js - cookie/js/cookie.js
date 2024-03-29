/**
 * Thiết lập cookie.
 * @param {string} cname Tên cookie
 * @param {string} cvalue Giá trị của cookie
 * @param {int} exdays Thời gian tồn tại của cookie (tính theo ngày)
 * @param {string} domain Domain của cookie (thiết lập domain là domain chính để share cookie giữa các sub-domain)
 */
export const setCookie = function (cname, cvalue, exdays, domain, secure) {
    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    document.cookie = cname + '=' + encodeURIComponent(cvalue) +
        ';expires=' + date.toUTCString() +
        ';path=/' +
        (domain ? ';domain=' + domain : '') +
        (secure ? ';secure' : '');
};

/**
 * Lấy giá trị cookie.
 * @param {string} cname Tên cookie
 * @returns {string} Giá trị của cookie
 */
export const getCookie = function (cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        const c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
};

/**
 * Lấy giá trị cookie.
 * @param {string} cname Tên cookie
 * @returns {string} String containing value of specified cookie or null if cookie does not exist
 */
function getCookie2(cname) {
    const prefix = cname + '=';
    const cookieStartIndex = document.cookie.indexOf(prefix);
    if (cookieStartIndex == -1) {
        return null;
    }
    let cookieEndIndex = document.cookie.indexOf(';', cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1) {
        cookieEndIndex = document.cookie.length;
    }
    return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

/**
 * Xóa cookie.
 * @param {string} cname Tên cookie
 * @param {string} domain Domain của cookie (thiết lập domain là domain chính để share cookie giữa các sub-domain)
 */
export const deleteCookie = function (cname, domain) {
    // Thiết lập giá trị rỗng
    // với thời hạn là một ngày trong quá khứ
    document.cookie = cname + '=' +
        ';expires=Thu, 01 Jan 1970 00:00:00 UTC' +
        ';path=/' +
        (domain ? ';domain=' + domain : '');
};
