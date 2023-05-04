const CHANGE_COLOR_DELAY = 1000;
let idInt = null;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

stopBtn.disabled = true;
startBtn.addEventListener('click', onStartBtnChangeColor);
stopBtn.addEventListener('click', onStopBtnChangeColor);

function onStartBtnChangeColor() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  idInt = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_DELAY);
}

function onStopBtnChangeColor() {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(idInt);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
