const arrWords = ['яблоко', 'груша', 'банан', 'киви', 'арбуз'];
let randWord = arrWords[Math.floor(Math.random() * arrWords.length)];
console.log(randWord);
const arrWordForRandom = randWord.split('');
console.log(arrWordForRandom);
let lenghtArrWordForRandom = arrWordForRandom.length;
console.log(lenghtArrWordForRandom);


