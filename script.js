const canvas = document.getElementById("molten");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawMolten() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "rgba(255, 100, 0, 0.3)");
  gradient.addColorStop(1, "rgba(255, 0, 0, 0.6)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(drawMolten);
}
drawMolten();
