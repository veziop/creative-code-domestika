'use strict';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.fillStyle = 'yellowgreen';
// context.fillRect(100,100, 270, 94);

// context.lineWidth = 7;
// context.beginPath();
// context.rect(300, 300, -50, -208);
// context.stroke();

// context.beginPath();

// context.arc(300, 300, 140, 0, Math.PI * 1.5);
// context.fill();


const saySomething = (param) => {
    console.log(param);
}

// saySomething('hello master Kenobi');
// saySomething('no tu vieja');
let height = 60;
let width = 60;
let gap = 20;
let x, y;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        x = 100 + (width + gap) * i;
        y = 100 + (height + gap) * j;

        context.beginPath();
        context.rect(x, y, width , height);
        context.stroke();

        if (Math.random() > 0.5) {
                context.beginPath();
                context.rect(x + 8, y + 8, width - 16, height - 16);
                context.stroke();
        }
    }
}
