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

//********************************************************************

/* stack(primitive) and heap(non=primitive) memory*/

let userName ="Harish"

let userName2 = userName  //copy of userName assigned to userName2..... 
userName2 ="Girish" //not effect the userName

console.log(userName); 
console.log(userName2);

let userDetails={
    userName:"Narayana",
    email:"nani@gmail.com"
}

let userDetails2 = userDetails //userDetails reference copied to userDetails2
userDetails2.email="narayana@gmail.com"  // changing userDetails2 effect the userDetails
console.log(userDetails);
console.log(userDetails2);
