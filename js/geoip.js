/**
 * geoip.js - IP Location Lookup (ipwho.is API)
 */
function lookupGeoIP() {
    let ip = document.getElementById('geo-ip').value.trim();
    const output = document.getElementById('geo-result');
    output.innerText = "위치 정보 데이터베이스 조회 중...";
    const apiUrl = ip ? `https://ipwho.is/${ip}` : `https://ipwho.is/`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            if (!data.success) { output.innerText = `Error: ${data.message}`; return; }
            output.innerHTML = `
IP Address:   ${data.ip}
Type:         ${data.type}
Continent:    ${data.continent} (${data.continent_code})
Country:      ${data.country} (${data.country_code})
City:         ${data.city}
Region:       ${data.region}
Latitude:     ${data.latitude}
Longitude:    ${data.longitude}

ISP:          ${data.connection.isp}
Org:          ${data.connection.org}
Timezone:     ${data.timezone.id}
            `.trim();
        })
        .catch(err => { output.innerText = "API Error: " + err; });
}
