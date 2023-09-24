'use strict'

/* フォントサイズ */
const FONT_SIZE = "48px monospace";
const SCREEN_HEIGHT = 120;
const SCREEN_WIDTH  = 128;

/* フレームレート、周期 */
const FRAME_RATE = 60;
const PERIOD_MS = 1000 / FRAME_RATE;

/* 画像 */
let mapImage;

/* 描画 */
let canvas;
let screen;

/* フレーム数 */
let displayFrame = 0;

const setCanvasSize = () => {
  canvas = document.getElementById('main');

  /* キャンバスの大きさを画面に合わせる */
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

const drawMain = () => {
  const display = screen.getContext('2d');

  for ( let y = 0; y < 32; y++ ) {
    for ( let x = 0; x < 64; x++ ) {
      display.drawImage(mapImage, x*32, y*32);
    }
  }

  display.font = FONT_SIZE;
  display.fillText(displayFrame, 0, 48);
}

const draw = () => {
  drawMain();
  const display = canvas.getContext('2d');
  /* 仮想画面のイメージを実画面へ転送 */
  display.drawImage(
    screen, 0, 0,
    screen.width, screen.height, 0, 0,
    canvas.width,
    canvas.height
  );
}

/**
 * フレームごとに実行する処理
 */
const update = () => {
  displayFrame++;
  draw();
}

window.onload = () => {
  /* 画像読み込み */
  mapImage = new Image();
  mapImage.src = './assets/map.png';

  /* 仮想画面の初期化 */
  screen = document.createElement('canvas');
  screen.height = SCREEN_HEIGHT;
  screen.width  = SCREEN_WIDTH;

  setCanvasSize();
  /* 画面サイズの変更時に画面サイズを更新する */
  window.addEventListener('resize', () => setCanvasSize());

  /* 1フレームごとにupdate()する */
  setInterval(() => update(), PERIOD_MS);
};
