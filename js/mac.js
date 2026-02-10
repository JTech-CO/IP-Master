/**
 * mac.js - MAC Address Vendor Lookup
 */
function lookupMAC() {
    const mac = document.getElementById('mac-input').value.trim();
    const output = document.getElementById('mac-result');

    if (!mac || mac.length < 6) {
        output.innerText = "유효한 MAC 주소를 입력하세요 (예: 00:1A:2B:...)";
        return;
    }

    output.innerText = "제조사 DB 검색 중...";

    fetch(`https://api.macvendors.com/${mac}`)
        .then(async response => {
            const text = await response.text();
            if (response.ok) {
                output.innerText = `MAC Address: ${mac}\nVendor: ${text}`;
            } else {
                output.innerText = `검색 실패: ${text}\n(너무 빠른 요청은 차단될 수 있습니다)`;
            }
        })
        .catch(err => {
            output.innerText = "CORS Error: 브라우저 정책으로 인해 API 호출이 차단되었습니다.\n(확장 프로그램을 사용하거나 서버를 통해야 합니다)\n\n" + err;
        });
}
