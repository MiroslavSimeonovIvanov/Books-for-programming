function drawFigure() {
  "use strict";

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  context.beginPath();
  context.moveTo(60, 120);
  context.lineTo(100, 120);
  context.lineTo(100, 80);
  context.lineTo(140, 80);
  context.lineTo(140, 120);
  context.lineTo(180, 120);
  context.stroke();
}

window.onload = drawFigure;
