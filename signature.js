"use strict";

drawSignature();
function drawSignature() {
  let canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let context = canvas.getContext("2d");

  //context.fillStyle = "#F0F0F0";
  context.fillStyle = "#000000";
  context.fillRect(0, 0, 300, 300);
  context.fillStyle = "#62A0CF";
  context.fillRect(75, 50, 50, 50);
  context.fillRect(175, 50, 50, 50);
  context.fillRect(25, 100, 250, 100);
  context.fillRect(125, 200, 50, 50);
}
