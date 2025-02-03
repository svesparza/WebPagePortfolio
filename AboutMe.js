// Text glitch effect variables
const splashHeadText = 'About Me';
const alphaCaps = ['A', 'B', 'E', 'M', 'O', 'T', 'U'];
const alpha = ['a', 'b', 'e', 'f', 'm', 'o', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', "'"];
let output = '';
let progress = 0;
const len = splashHeadText.length;
let isGlitching = false;

// Function to create the glitch effect on the splash head text
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

// Function to start the glitch effect
function startSplashHeadGlitch() {
    isGlitching = true;
    splashHeadGlitch();
}

// Function to stop the glitch effect
function stopSplashHeadGlitch() {
    isGlitching = false;
}

// Start the glitch effect when the window loads
window.onload = function () {
    startSplashHeadGlitch();
};

// Canvas setup for matrix rain effect
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix rain effect variables
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

var fontSize = 10,
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Function to draw the matrix rain effect
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Set interval to continuously draw the matrix rain effect
setInterval(draw, 33);
