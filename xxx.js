const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 400;

const c = canvas.getContext("2d");
c.fillRect(10, 20, 100, 50);
c.fillStyle = "tomato";
c.fillRect(200, 100, 150, 100);
c.fillRect(100, 300, 210, 210);
c.fillStyle = "pink";
c.fillRect(500, 400, 130, 150);
console.log(canvas);

Line;
c.beginPath();
c.moveTo(10, 10);
c.lineTo(100, 100);

c.strokeStyle = "red";
c.stroke();

// Arc / circle
// c.beginPath();
// c.strokeStyle = "gray";
// c.arc(200, 300, 35, 0, Math.PI * 2, false);
// c.stroke();

for (let i = 0; i < 50; i++) {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const x = Math.random() * window.innerHeight;
  const y = Math.random() * window.innerWidth;
  c.beginPath();
  c.strokeStyle = randomColor;
  c.arc(x, y, 35, 0, Math.PI * 2, false);
  c.stroke();
}
