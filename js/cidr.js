/**
 * cidr.js - CIDR Calculator (IPv4 / IPv6)
 */
function calculateCIDR() {
    const ip = document.getElementById('cidr-ip').value.trim();
    const cidr = parseInt(document.getElementById('cidr-mask').value.trim());
    const output = document.getElementById('cidr-result');

    if (!ip || isNaN(cidr)) {
        output.innerText = "Error: 올바른 IP와 CIDR을 입력하세요.";
        return;
    }

    try {
        if (ip.includes(':')) {
            output.innerText = calculateIPv6(ip, cidr);
        } else {
            if (cidr < 0 || cidr > 32) throw "IPv4 CIDR must be 0-32";
            output.innerText = calculateIPv4(ip, cidr);
        }
    } catch (e) {
        output.innerText = "Error: " + e;
    }
}

function calculateIPv4(ip, cidr) {
    const parts = ip.split('.');
    if (parts.length !== 4) throw "Invalid IPv4 format";

    let ipInt = 0;
    for (let i = 0; i < 4; i++) {
        ipInt = (ipInt << 8) | parseInt(parts[i]);
    }
    ipInt = ipInt >>> 0;

    const mask = cidr === 0 ? 0 : (~0) << (32 - cidr);
    const maskInt = mask >>> 0;
    const networkInt = (ipInt & maskInt) >>> 0;
    const broadcastInt = (networkInt | (~maskInt)) >>> 0;
    const count = Math.pow(2, 32 - cidr);
    const usable = count - 2 > 0 ? count - 2 : 0;

    const intToIp = (int) => {
        return [ (int >>> 24) & 255, (int >>> 16) & 255, (int >>> 8) & 255, int & 255 ].join('.');
    };

    return `
CIDR:       ${ip}/${cidr}
Netmask:    ${intToIp(maskInt)}
Network IP: ${intToIp(networkInt)}
Broadcast:  ${intToIp(broadcastInt)}
Start IP:   ${intToIp(networkInt + 1)}
End IP:     ${intToIp(broadcastInt - 1)}
Total Hosts:${count.toLocaleString()}
Usable:     ${usable.toLocaleString()}
    `.trim();
}

function calculateIPv6(ip, cidr) {
    if (cidr < 0 || cidr > 128) throw "IPv6 CIDR must be 0-128";
    const totalBits = 128n;
    const cidrBig = BigInt(cidr);
    const hosts = 2n ** (totalBits - cidrBig);
    return `
Type:       IPv6
CIDR:       /${cidr}
Total IPs:  ${hosts.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} (2^${128-cidr})
    `.trim();
}
