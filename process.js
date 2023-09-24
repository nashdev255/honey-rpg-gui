'use strict';

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
