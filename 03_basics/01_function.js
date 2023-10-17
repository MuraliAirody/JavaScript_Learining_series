//function

function repeating(){
    console.log("Hello");
    console.log("world");
}

//if we want to executing the group of statements again and again then its better to use function

// repeating()
// repeating()

/* 
function addTwoNumbers(number1,number2){ //function declaration with parameters
    console.log(number1+number2)   //without returning the sum we are printing result inside the function only
}
addTwoNumbers(5,10); //function call with arguments 
*/

function addTwoNumbers(number1,number2){
    // let ans = number1 + number2
    // return ans;
    return number1+number2
}
let result = addTwoNumbers(55,55)
// console.log(`result value:- ${result}`);

// we have to take of cases here

function addTwoNumbers2(number1,number2){
    console.log(number1+number2);
}
// addTwoNumbers2(55,"55")  function accepting string values also for adding two numbers
// addTwoNumbers2(55,"a")

function sayHello(userName){
    // return `Hello, ${userName}. Good Morning`
    if(!userName){
        console.log("Inside the function");
        return `Please enter the user name`
    }
    return `Hello, ${userName}. Good Morning`
}
console.log(sayHello()); //if there is no argument, so the parameter will be treated as undefined 
console.log(sayHello('ganesh'));   



function calculatePrice(item1,item2,...items){
    return items
}

console.log(calculatePrice(20,30,50,60,70));

function calculatePrice2(...items){
    return items
}
console.log(calculatePrice2(20,30,50,60,70));

/***********************************pass the object to function******************************/
const user = {
    username: "user",
    price: 199
}

function handleObject(myObject){
    console.log(`Username is ${myObject.username} and price is ${myObject.price}`);
}

handleObject(user);
handleObject({
    username: "user",
    price: 200
});

/********************************************passing array to function*****************************/
const newArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
