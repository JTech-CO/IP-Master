/**
 * dns.js - 도메인 IPv4 Converter (Google DNS API)
 */
function lookupDNS() {
    const domain = document.getElementById('dns-domain').value.trim();
    const output = document.getElementById('dns-result');
    if (!domain) { output.innerText = "도메인을 입력하세요."; return; }
    output.innerText = "DNS 서버에 조회 중...";

    fetch(`https://dns.google/resolve?name=${domain}&type=A`)
        .then(response => response.json())
        .then(data => {
            if (data.Status !== 0) {
                output.innerText = `Error: DNS 조회 실패 (Status Code: ${data.Status})`;
                return;
            }
            let resultText = `Domain: ${data.Name}\n\n`;
            if (data.Answer) {
                data.Answer.forEach(record => {
                    if (record.type === 1) resultText += `[A Record] ${record.data} (TTL: ${record.TTL})\n`;
                });
            } else {
                resultText += "A 레코드를 찾을 수 없습니다.";
            }
            output.innerText = resultText;
        })
        .catch(err => { output.innerText = "Network Error: " + err; });
}
