/**
 * password.js - Secure Key Generator (Toggle, Input Correction, Copy, Generate)
 */

function toggleOption(btn) {
    btn.classList.toggle('active');
}

function checkInputLength(el) {
    if (el.value === "") return;
    let val = parseInt(el.value);
    if (val > 64) el.value = 64;
}

function fixInputLength(el) {
    let val = parseInt(el.value);
    if (isNaN(val) || val < 4) el.value = 4;
    if (val > 64) el.value = 64;
}

function checkInputCount(el) {
    if (el.value === "") return;
    let val = parseInt(el.value);
    if (val > 10) el.value = 10;
}

function fixInputCount(el) {
    let val = parseInt(el.value);
    if (isNaN(val) || val < 1) el.value = 1;
    if (val > 10) el.value = 10;
}

function copyToClipboard(text, btnElement) {
    const showSuccess = () => {
        const originalText = btnElement.innerText;
        btnElement.innerText = "Copied!";
        btnElement.style.borderColor = "#00ff41";
        btnElement.style.color = "#00ff41";

        setTimeout(() => {
            btnElement.innerText = originalText;
            btnElement.style.borderColor = "#500";
            btnElement.style.color = "#ddd";
        }, 1500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(showSuccess)
            .catch(err => {
                console.warn('Clipboard API failed, trying fallback:', err);
                fallbackCopy(text, showSuccess);
            });
    } else {
        fallbackCopy(text, showSuccess);
    }
}

function fallbackCopy(text, successCallback) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            successCallback();
        } else {
            alert("복사에 실패했습니다 (Fallback).");
        }
    } catch (err) {
        console.error('Fallback copy failed:', err);
        alert("복사에 실패했습니다.");
    }
    document.body.removeChild(textArea);
}

function generatePassword() {
    const lengthInput = document.getElementById('pw-length');
    const length = parseInt(lengthInput.value);
    const countInput = document.getElementById('pw-count');
    const count = parseInt(countInput.value);
    const resultContainer = document.getElementById('pw-result-container');

    if (isNaN(length) || length < 4 || length > 64) {
        resultContainer.innerHTML = '<input type="text" value="Length는 4~64 범위 안에서 입력 바랍니다." readonly style="color: #ff4444;">';
        return;
    }

    if (isNaN(count) || count < 1 || count > 10) {
        resultContainer.innerHTML = '<input type="text" value="생성 개수는 1~10 범위 안에서 입력 바랍니다." readonly style="color: #ff4444;">';
        return;
    }

    const useUpper = document.getElementById('btn-upper').classList.contains('active');
    const useLower = document.getElementById('btn-lower').classList.contains('active');
    const useNum = document.getElementById('btn-num').classList.contains('active');
    const useSpecial = document.getElementById('btn-special').classList.contains('active');

    const charsetLower = "abcdefghijklmnopqrstuvwxyz";
    const charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charsetNum = "0123456789";
    const charsetSpecial = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charset = "";
    if (useLower) charset += charsetLower;
    if (useUpper) charset += charsetUpper;
    if (useNum) charset += charsetNum;
    if (useSpecial) charset += charsetSpecial;

    if (charset === "") {
        resultContainer.innerHTML = '<input type="text" value="옵션을 하나 이상 선택하세요." readonly style="color: #ff4444;">';
        return;
    }

    resultContainer.innerHTML = '';

    for (let k = 0; k < count; k++) {
        let result = "";
        const array = new Uint32Array(length);
        window.crypto.getRandomValues(array);

        for (let i = 0; i < length; i++) {
            result += charset[array[i] % charset.length];
        }

        const row = document.createElement('div');
        row.className = 'key-row';

        const input = document.createElement('input');
        input.type = 'text';
        input.value = result;
        input.readOnly = true;
        input.style.fontSize = '18px';
        input.style.color = '#00ff41';

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerText = 'Copy';
        copyBtn.onclick = function () {
            copyToClipboard(result, copyBtn);
        };

        row.appendChild(input);
        row.appendChild(copyBtn);
        resultContainer.appendChild(row);
    }
}
