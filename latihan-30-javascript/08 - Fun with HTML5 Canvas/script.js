const canvas = document.querySelector(`#draw`);
const ctx = canvas.getContext(`2d`);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = `#BADA55`;
ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = 100;
ctx.globalCompositeOperation = `source-over`
console.log(ctx);

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;//stop the function jika isDrawing = false
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // mulai garis
  ctx.moveTo(lastX, lastY);
  //akhir garis
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]
  // saat mouse bergeral lastX dan lastYnya juga ikut berubah
  hue++;
  if (hue >= 360) hue = 0;
  
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  (direction) ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener(`mousedown`, (e) => {
  [lastX, lastY] = [e.offsetX, e.offsetY]
  isDrawing = true
});
canvas.addEventListener(`mousemove`, draw);
canvas.addEventListener(`mouseup`, () => isDrawing = false);
canvas.addEventListener(`mouseout`, () => isDrawing = false);