
import { resultBlock, textResult, restartBtn, gameWrapper } from './const.js'
export function victory(arrCorrentLetters, arrCorrentAnswer) {
    let numOfCorrentAnsw = 0;
    for (let i = 0; i < arrCorrentLetters.length; i++) {
        if (arrCorrentLetters[i] === arrCorrentAnswer[i]) {
            numOfCorrentAnsw++;
            if (numOfCorrentAnsw === arrCorrentLetters.length) {
                resultBlock.style.display = 'block';
                textResult.innerText = 'ПОБЕДА!';
                gameWrapper.style.display = 'none';
                restartBtn.addEventListener('click', () => location.reload());
            }
        }
    }
}