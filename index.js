import {arrWordForRandom,btn,dashes,inputNode, dashesNode} from './modules/const.js';
import {showRandomDashes} from './modules/showDashes.js';
import {showErrorImage} from './modules/showErrorImage.js';
import {victory} from './modules/victory.js';


console.log(arrWordForRandom);
console.log(dashes);


function game(arrWord, arrDashes){ 
    let countFalse = 0;
    showRandomDashes();
    function onBtnClick () {
        arrWord.forEach((item, index) => {
            if (inputNode.value === item) {
                arrDashes[index] = item;
                dashesNode.innerText.split(' ')[index] = inputNode.value;
                showRandomDashes();
                // console.log(arrDashes);
            } 
        });   
        if (!arrDashes.includes(inputNode.value)) {
            countFalse++
            showErrorImage(countFalse);
        }
        if (countFalse === 3) {
                btn.removeEventListener('click', onBtnClick);
            }    
        victory(arrWord, arrDashes);            
    }
    btn.addEventListener('click', onBtnClick);      
}
game(arrWordForRandom, dashes);
