'use strict';
const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1350 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    let x = width / 2;
    let y = height / 2;
    const radius = 60;
    const diameter = radius * 2;

    // drawOppPair(context, x, y, radius, 'black')
    // context.translate(width / 2, height / 2);

    // drawOppPair(context, 0, y, radius, '#201249')
    // context.restore();

    // context.translate(width / 2, height / 4);
    // drawCircle(context, 0, 0, 40)

    context.translate(x, y);
    for (let i = 0; i < 9; i++) {
      context.translate(diameter * i, 0)
      drawOppPair(context, 0, 0, radius, 'black');
      context.restore();
    };
    



  };
};

function drawCircle(context, xCord, yCord, radius, fillColour) {
  context.fillStyle = fillColour;
  context.save();
  context.beginPath();
  context.arc(0, 0, radius, 0, Math.PI * 2);
  context.fill();
  const gap = radius * .14
  context.clearRect(-gap/2, -radius - 5, gap, 10 + radius * 2);
  context.closePath();
  context.restore();
}

function drawOppPair(context, xCord, yCord, radius, fillColour, orientation = false) {
  context.fillStyle = fillColour;
  context.save();
  orientation && context.rotate(math.degToRad(90));
  context.beginPath();
  context.arc(-radius, 0, radius, -math.degToRad(90), math.degToRad(90));
  context.fill();
  context.closePath();
  context.restore();

  context.save();
  orientation && context.rotate(math.degToRad(90));
  context.beginPath();
  context.arc(radius, 0, radius, -math.degToRad(90), math.degToRad(90), true);
  context.fill();
  context.closePath();
  context.restore();
};

canvasSketch(sketch, settings);
