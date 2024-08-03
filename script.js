const ball = document.querySelector('.ball');
const orbit = document.querySelector('.orbit');

let angle = 0;
const radius = orbit.clientWidth / 2;

function animate() {
    angle += 0.01;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    // Поворачиваем координаты точки (x, y) на 45 градусов и зеркально отражаем
    const rotatedX = x * Math.cos(Math.PI / 4) - y * Math.sin(Math.PI / 4);
    const rotatedY = x * Math.sin(Math.PI / 4) + y * Math.cos(Math.PI / 4);

    // Обновляем позицию шара
    ball.style.left = `${150 + rotatedX}px`;
    ball.style.top = `${150 + rotatedY}px`;

    requestAnimationFrame(animate);
}

animate();
