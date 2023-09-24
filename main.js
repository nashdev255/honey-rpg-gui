'use strict'

/* フォントサイズ */
const FONT_SIZE = "48px monospace";

/* フレームレート、周期 */
const FRAME_RATE = 60;
const PERIOD_MS = 1000 / FRAME_RATE;

/* 画像 */
let mapImage;

/* 描画 */
let canvas;
let display;

/* フレーム数 */
let displayFrame = 0;

const initCanvas = () => {
  canvas = document.getElementById('main');

  /* キャンバスの大きさを画面に合わせる */
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

const initDisplay = () => {
  display = canvas.getContext('2d');
  display.font = FONT_SIZE;
}

const WmPaint = () => {
  for ( let y = 0; y < 32 ; y++ ) {
    for ( let x = 0; x < 48; x++ ) {
      display.drawImage(mapImage, x*32, y*32);
    }
  }

  display.fillText('Hello World' + displayFrame, 0, 48);
}

/* フレームごとに */
const update = () => {
  displayFrame++;
  WmPaint();
}

window.onload = () => {
  mapImage = new Image();
  mapImage.src = './assets/map.png'

  initCanvas();
  initDisplay();

  setInterval(() => update(), PERIOD_MS);
};
