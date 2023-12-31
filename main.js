'use strict';

/* フォントの大きさ */
const FONT_SIZE = "48px monospace";

/* ゲーム画面の大きさ */
const SCREEN_WIDTH  = 128;
const SCREEN_HEIGHT = 120;

/* フレームレート、周期 */
const FRAME_RATE = 60;
const PERIOD_MS = 1000 / FRAME_RATE;

/* 画像 */
let mapImage;

/* 描画 */
let canvas;
let screen;
let screenWidth;
let screenHeight;

/* フレーム数 */
let displayFrame = 0;

const setCanvasSize = () => {
  canvas = document.getElementById('main');

  /* キャンバスの大きさを画面に合わせる */
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  screenWidth  = screen.width  * ( canvas.height / screen.height);
  screenHeight = screen.height * ( canvas.height / screen.height);
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
    screen,
    0, 0, screen.width, screen.height,
    0, 0, screenWidth, screenHeight
  );
}

/**
 * フレームごとに実行する処理
 */
const update = () => {
  displayFrame++;
  draw();
}

/**
 * ユーザー側で画面の大きさに変更があった場合に行う処理。
 */
const onChangeScreenSize = () => {
  window.addEventListener('resize', () => {
    setCanvasSize();
  });
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
  onChangeScreenSize();

  /* 1フレームごとにupdate()する */
  setInterval(() => update(), PERIOD_MS);
};
