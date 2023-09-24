'use strict'

window.onload = () => {
  const canvas = document.getElementById('main');
  const display = canvas.getContext('2d');
  display.fillText('Hello, World.', 0, 64);
};
