const score = 600;
// console.log(typeof score);

const score2 = new Number(5);
// console.log(score2);

let deci = 5.58451548
// console.log(deci.toFixed(3))

// console.log(typeof deci.toString())
// console.log(deci.toString().length)

deci = 158.9582
console.log(deci.toPrecision(4));

let scoreValue = 5165168516

console.log(scoreValue.toLocaleString()); //indian standard numbers

//********************Math***************/

console.log(Math)

console.log(Math.PI);
console.log(Math.abs(-55));
console.log(Math.round(5.555656));
console.log(Math.min(5,88,48,6,9));
console.log(Math.max(5,88,48,6,9));

console.log(Math.random()) //which produce the number between 0 -> 1
console.log(Math.floor((Math.random()*10)+1)) 
//random*10=>0->10.999..... +1 moves to 1->10.9999... floor makes 1 - >10
let max = 30
let min = 20
console.log(Math.floor(Math.random()*(max-min+1)+min)); //20->30


