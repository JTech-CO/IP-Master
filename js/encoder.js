/**
 * encoder.js - Base64 / URL Encoder & Decoder
 */
function processEncode(type) {
    const input = document.getElementById('encode-input').value;
    const output = document.getElementById('encode-output');

    try {
        if (type === 'base64_enc') {
            output.value = btoa(unescape(encodeURIComponent(input)));
        } else if (type === 'base64_dec') {
            output.value = decodeURIComponent(escape(atob(input)));
        } else if (type === 'url_enc') {
            output.value = encodeURIComponent(input);
        } else if (type === 'url_dec') {
            output.value = decodeURIComponent(input);
        }
    } catch (e) {
        output.value = "Error: 변환할 수 없습니다.\n" + e.message;
    }
}
