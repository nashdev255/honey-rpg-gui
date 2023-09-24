'use strict'

const FONT_SIZE = "48px monospace";
const FRAME_RATE = 60;
const PERIOD_MS = 1000 / FRAME_RATE;

window.onload = () => {
  const canvas = document.getElementById('main');
  const display = canvas.getContext('2d');
  display.font = FONT_SIZE;
  display.fillText('Hello World', 0, 48);

  setInterval(() => { WmTimer() }, PERIOD_MS);
};
