let a="63";

let numberA = Number(a); /* string to number conversion */
console.log(numberA);
console.log(typeof numberA);

let b="63abc"
let numberB= Number(b);
console.log(numberB); /*Not a Number */
console.log(typeof numberB);

let c=1;
let booleanC = Boolean(c)

console.log(booleanC); /*Number to boolean conversion*/
console.log(typeof booleanC);

let isLoggedIn = "Yes"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* 
   1 -> true
   0 -> false
   "" => false
   "Yes" => true
*/

/* *********************** Operations ****************************** */
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

console.log("**********************************************************");
console.log(3+3);
console.log("3"+"3");
console.log("3"+ +3);
console.log(3+ +"3"); //3+ (+"3" -> here + is in front of string so its converted in to Number)
console.log(3+3-3);
console.log("3"+"3"-"3"); //"3"+"3"->("33") -("3" ->here - is in front of string so its converted in to Number)
console.log("**********************************************************");

console.log(+true); 
/* 
 true is in front of arithmetic(+) operator (1)
 true is in front of arithmetic(-) operator (-1)
 false is in front of arithmetic(+) operator (0)
 false is in front of arithmetic(+) operator (-0)
 
 */
