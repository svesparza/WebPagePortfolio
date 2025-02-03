const splashHeadText = 'Portfolio';
const alphaCaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', "'"];
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', "'"];
let output = '';
let progress = 0;
const len = splashHeadText.length;
let isGlitching = false;

function splashHeadGlitch() {
    if (progress >= len || !isGlitching) {
        return;
    }
    const randomNums = Math.floor(Math.random() * alpha.length);
    if (alpha[randomNums] == splashHeadText[progress] || alphaCaps[randomNums] == splashHeadText[progress]) {
        output += splashHeadText[progress];
        document.getElementById('splash-head').innerHTML = `${output}`;
        progress++;
    } else {
        document.getElementById('splash-head').innerHTML = `${output}${alpha[randomNums]}`;
    }

    requestAnimationFrame(splashHeadGlitch);
}

function startSplashHeadGlitch() {
    isGlitching = true;
    splashHeadGlitch();
}

function stopSplashHeadGlitch() {
    isGlitching = false;
}


window.onload = function () {
    startSplashHeadGlitch();
};
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// glitch help from this stack overflow letters https://stackoverflow.com/questions/64816798/glitch-effect-with-javascript 

var letters = 'hire me';
letters = letters.split('');

var fontSize = 10,
    columns = canvas.width / fontSize;


var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#f5a2aa';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}
setInterval(draw, 59)
// Matrix Code by Clive Cooper 
//https://codepen.io/yaclive/pen/EayLYO