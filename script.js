
const ball = document.querySelector('.ball');
const orbit = document.querySelector('.orbit');

let angle = 0;
const radiusX = orbit.clientWidth / 2;
const radiusY = orbit.clientHeight / 2;
const centerX = orbit.offsetLeft + radiusX;
const centerY = orbit.offsetTop + radiusY;

function animate() {
    angle += 0.01;
    const x = centerX + radiusX * Math.cos(angle);
    const y = centerY + radiusY * Math.sin(angle);

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    requestAnimationFrame(animate);
}

animate();
