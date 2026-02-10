/**
 * tabs.js - Tab Switching Logic
 */
function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.main-nav li').forEach(el => el.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');

    const links = document.querySelectorAll('.main-nav a');
    links.forEach(link => {
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(tabId)) {
            link.parentElement.classList.add('active');
        }
    });

    if (tabId === 'subnet' && typeof generateSubnetTable === 'function') {
        generateSubnetTable();
    }
}
