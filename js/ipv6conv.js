/**
 * ipv6conv.js - IPv4 to IPv6
 */
function convertIP() {
    const ip = document.getElementById('conv-ip').value.trim();
    const output = document.getElementById('conv-result');
    try {
        const parts = ip.split('.');
        if (parts.length !== 4) throw "잘못된 IPv4 형식입니다.";
        let hexStr = "";
        parts.forEach(part => {
            let num = parseInt(part);
            if (isNaN(num) || num < 0 || num > 255) throw "0~255 사이 숫자여야 합니다.";
            let hex = num.toString(16).toUpperCase();
            if (hex.length < 2) hex = "0" + hex;
            hexStr += hex;
        });
        const group1 = hexStr.substring(0, 4);
        const group2 = hexStr.substring(4, 8);
        output.innerHTML = `Input IPv4:  ${ip}\n\n[ 변환 결과 ]\nIPv6 Short:  ::ffff:${group1}:${group2}\nIPv6 Long:   0000:0000:0000:0000:0000:ffff:${group1}:${group2}\nMapped:      ::ffff:${ip}`;
    } catch (e) {
        output.innerText = "Error: " + e;
    }
}
