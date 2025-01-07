import Planet from '../models/Planet';

export const planets = [
    new Planet(1, 'Планета_1', require('@/assets/img/uniserve/mercury.jpg'), 'Рандомный текст 1', { top: '80%', left: '20%' }),
    new Planet(2, 'Планета_2', require('@/assets/img/uniserve/venus2.jpg'), 'Рандомный текст 2', { top: '65%', left: '30%' }),
    new Planet(3, 'Планета_3', require('@/assets/img/uniserve/earth.jpg'), 'Рандомный текст 3', { top: '60%', left: '50%' }),
    new Planet(4, 'Планета_4', require('@/assets/img/uniserve/mars.jpg'), 'Рандомный текст 4', { top: '80%', left: '70%' }),
];
