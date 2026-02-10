/**
 * ua.js - User Agent Analyzer
 */
function analyzeUA() {
    const ua = navigator.userAgent;
    document.getElementById('ua-raw').value = ua;
    const output = document.getElementById('ua-result');

    let browser = "Unknown";
    if (ua.indexOf("Firefox") > -1) browser = "Mozilla Firefox";
    else if (ua.indexOf("SamsungBrowser") > -1) browser = "Samsung Internet";
    else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) browser = "Opera";
    else if (ua.indexOf("Trident") > -1) browser = "Internet Explorer";
    else if (ua.indexOf("Edge") > -1) browser = "Microsoft Edge";
    else if (ua.indexOf("Chrome") > -1) browser = "Google Chrome";
    else if (ua.indexOf("Safari") > -1) browser = "Apple Safari";

    let os = "Unknown OS";
    if (ua.indexOf("Win") != -1) os = "Windows";
    if (ua.indexOf("Mac") != -1) os = "MacOS";
    if (ua.indexOf("Linux") != -1) os = "Linux";
    if (ua.indexOf("Android") != -1) os = "Android";
    if (ua.indexOf("iOS") != -1) os = "iOS";
    if (ua.indexOf("iPhone") != -1) os = "iPhone OS";

    output.innerText = `
Browser:  ${browser}
OS:       ${os}
Platform: ${navigator.platform}
Cookies:  ${navigator.cookieEnabled ? "Enabled" : "Disabled"}
Language: ${navigator.language}
Screen:   ${screen.width} x ${screen.height}
    `.trim();
}
