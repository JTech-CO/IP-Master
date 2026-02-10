/**
 * matrix.js - Developer Link Matrix Effect
 */
(function () {
    var devLink = document.getElementById('dev-link');
    if (!devLink) return;

    devLink.addEventListener('click', function (e) {
        e.preventDefault();

        var canvas = document.getElementById('matrix-overlay');
        var ctx = canvas.getContext('2d');

        canvas.style.display = 'block';
        void canvas.offsetWidth;
        canvas.style.opacity = '1';

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var letters = "01".split("");
        var fontSize = 16;
        var columns = canvas.width / fontSize;
        var drops = [];

        for (var x = 0; x < columns; x++) {
            drops[x] = Math.random() * -100;
        }

        function drawMatrix() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00FF00";
            ctx.font = fontSize + "px monospace";

            for (var i = 0; i < drops.length; i++) {
                var text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        var interval = setInterval(drawMatrix, 33);

        setTimeout(function () {
            canvas.style.filter = "brightness(300%)";
        }, 2000);

        setTimeout(function () {
            clearInterval(interval);
            window.location.href = "https://jtech-co.github.io/my-website/MLP.html";
        }, 2500);
    });
})();
