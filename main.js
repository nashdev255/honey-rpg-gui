'use strict'

/* フォントサイズ */
const FONT_SIZE = "48px monospace";

/* フレームレート、周期 */
const FRAME_RATE = 60;
const PERIOD_MS = 1000 / FRAME_RATE;

/* 画像 */
let mapImage;

/* フレーム数 */
let displayFrame = 0;

const WmTimer = () => {
  const canvas = document.getElementById('main');
  const display = canvas.getContext('2d');

  /* キャンバスの大きさを画面に合わせる */
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  display.font = FONT_SIZE;

  displayFrame++;

  for ( let y = 0; y < 32 ; y++ ) {
    for ( let x = 0; x < 48; x++ ) {
      display.drawImage(mapImage, x*32, y*32);
    }
  }

  display.fillText('Hello World' + displayFrame, 0, 48);
}

window.onload = () => {
  mapImage = new Image();
  mapImage.src = './assets/map.png'

  setInterval(() => { WmTimer() }, PERIOD_MS);
};
