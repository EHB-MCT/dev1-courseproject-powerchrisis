"use strict";

import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as Noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillRect(0, 0, width, height);
drawNoiseWave();

function drawNoiseWave() {
  for (let i = 0; i < width; i++) {
    let x = i;
    let y = Noise.perlinNoise(i / 200) * height;
    context.fillStyle = Utils.hsl((360 / height) * y, 100, 50);
    context.fillRect(x, y, 20, 20);
  }
}
