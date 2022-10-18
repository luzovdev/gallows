// Создать количество черточек взависимости от кол. букв
import {arrWordForRandom,dashesNode} from './const.js'



function getRandomDashes(){
    const dashes = arrWordForRandom.map(item => item = '_');
    dashesNode.innerText = dashes.join(' ')
}
getRandomDashes()



