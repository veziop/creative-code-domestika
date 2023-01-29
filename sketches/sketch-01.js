const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    let h = 60;
    let w = 60;
    let gap = 20;
    let x, y;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            x = 100 + (w + gap) * i;
            y = 100 + (h + gap) * j;
            
            context.strokeStyle ='#ffffff';

            context.beginPath();
            context.lineWidth = 10
            context.strokeRect(x, y, w , h);

            if (Math.random() > 0.63) {
                    context.beginPath();
                    context.lineWidth = Math.random() > 0.5 ? 4 : 10;
                    context.strokeRect(x, y, w - 30, h - 30);
        }
    }
}

  };
};

canvasSketch(sketch, settings);
