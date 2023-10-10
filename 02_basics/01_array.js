//Array

const myArr = [1,2,3,4,5];
const mixArray = [1,2,"Raj",true,null]

// console.log(myArr);
// console.log(mixArray);

const newArray = new Array(1,2,3);
console.log(newArray[2]);

//Array methods
myArr.push(9)
myArr.push(10) //push -> add element at the end of the array
console.log(myArr);

myArr.pop()  //pop -> remove the last element of the array
console.log(myArr); 

myArr.unshift(155) //unshift -> add the ele at the beginning of the array
console.log(myArr);

myArr.shift() //shift-> removes the ele from the beginning
console.log(myArr);

console.log(myArr.includes(9)); // exist or not
console.log(myArr.indexOf(4)); //return index if exist, if not return -1

const joinArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr);
console.log(joinArr);

//slice vs splice

const sliceArr = myArr.slice(1,5); // return copy of the array(without changing original array) between the range
console.log(myArr);
console.log(sliceArr);

const spliceArr = myArr.splice(1,5) //return the array from existing array inclusive range(change the original array)
console.log(myArr);
console.log(spliceArr);





