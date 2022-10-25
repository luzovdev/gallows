import { gameover } from './gameover.js';
export function showErrorImage(countFalse) {
    let arrImage = ['2.png', '3.png', '4.png'];
    let img = document.getElementById('image');

    img.src = arrImage[countFalse - 1];
    if (countFalse === 3) {
        gameover();
    }
}