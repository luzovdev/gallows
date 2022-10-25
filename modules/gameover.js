import { resultBlock, textResult, restartBtn, gameWrapper } from './const.js'

export function gameover() {
    setTimeout(() => {
        resultBlock.style.display = 'block';
        textResult.innerText = 'Поражение!';
        gameWrapper.style.display = 'none';
        restartBtn.addEventListener('click', () => location.reload());
    }, 500);
}