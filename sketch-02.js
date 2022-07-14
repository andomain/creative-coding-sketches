const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);


    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    const num = 20;
    const slice = math.degToRad(360 / num);
    const radius = width * 0.3;
    // const radius = 0.9*width;

    for (let i = 0; i < num; i++) {
      const angle = slice * i;

      const x = radius * Math.sin(angle);
      const y = radius * Math.cos(angle);
      // console.log(color.style([0, 0, 0, random.range(0.1, 1)]));
      context.save();
      context.fillStyle = `rgba(0, 0, 0, ${random.range(0.3, 1)})`;
      context.translate(cx, cy);
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 2));

      context.beginPath();
      context.rect(-0.5 * w, random.range(0, -0.5 * h), w, h);
      context.fill();

      context.restore();

      context.save();
      context.strokeStyle = `rgba(0, 0, 0, ${random.range(0.6, 1)})`;
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.7, 1.2), slice * random.range(1, -0.5), slice * random.range(1, 2));
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
