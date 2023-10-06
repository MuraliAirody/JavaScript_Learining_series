let name = "rajesh"
let rupee = 100

// console.log("My name is "+name+" and I have "+rupee+" rupees");

// console.log(`My name is ${name} and I have ${rupee} rupees`);

// const gameName = new String("tic-tac-toe");
// console.log(gameName[1]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t')); 

const text = "Mozilla";

console.log(text.substring(5,2));
console.log(text.substring("5",2)); //its trying to convert non number type to number type
console.log(text.substring("5a",2)); //if its not changeable type, its treated as 0
console.log(text.slice(5,2));

console.log(text.substring(-5,-2)); //substring treat negative vales as 0 only 
console.log(text.substring(-5,2)); 
console.log(text.slice(-5,-2)); //slice works with negative values also


const password = "   password@123  "
console.log(password.trim()); //removes the extra spaces before and after the string

const url = "https://google.com/google%20chrome"

console.log(url.replace('%20', '-'))

console.log(url.includes('facebook'))

const stringToArray = "Hello My name is name"
console.log(stringToArray.split(' '));