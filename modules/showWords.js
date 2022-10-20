import {arrWordForRandom,btn,dashes,inputNode, dashesNode} from './const.js'

console.log(arrWordForRandom);
console.log(dashes);
function showWords(arrWord, arrDashes){
    btn.addEventListener('click',() => {
        arrWord.forEach((item, i) => {
            if (inputNode.value === item) {
                arrDashes[i] = item;
                dashesNode.innerText = inputNode.value;
                console.log(arrDashes);
            }
        });
    })
}

showWords(arrWordForRandom, dashes)

