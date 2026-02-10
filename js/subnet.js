/**
 * subnet.js - Subnet Mask Cheat Sheet Table Generator
 */
var isTableGenerated = false;

function generateSubnetTable() {
    if (isTableGenerated) return;
    const tbody = document.getElementById('subnet-tbody');

    for (let i = 32; i >= 0; i--) {
        const maskLong = i === 0 ? 0 : (~0) << (32 - i);
        const maskInt = maskLong >>> 0;

        const maskStr = [
            (maskInt >>> 24) & 255,
            (maskInt >>> 16) & 255,
            (maskInt >>> 8) & 255,
            maskInt & 255
        ].join('.');

        const wildLong = ~maskInt;
        const wildInt = wildLong >>> 0;
        const wildStr = [
            (wildInt >>> 24) & 255,
            (wildInt >>> 16) & 255,
            (wildInt >>> 8) & 255,
            wildInt & 255
        ].join('.');

        const totalIPs = Math.pow(2, 32 - i).toLocaleString();

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>/${i}</td>
            <td>${maskStr}</td>
            <td>${totalIPs}</td>
            <td>${wildStr}</td>
        `;
        tbody.appendChild(tr);
    }
    isTableGenerated = true;
}
