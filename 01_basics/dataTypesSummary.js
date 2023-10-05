/* 
    Primitive data Types 

  7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt    
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const name="Rajesh"
const anotherName="Rajesh"

console.log(name === anotherName);

const numberId = 11
const anotherNumberId = 11;

console.log(numberId === anotherNumberId);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const a=22556984846464787544n*320n
console.log(a);

/* Reference (Non primitive)

Array, Objects, Functions */

const arrayNames = ["Naveen","Ajay","Rajesh"]
console.log(arrayNames);
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
