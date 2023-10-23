/*  
    () => expression

    param => expression

    (param) => expression

    (param1, paramN) => expression

            () => {
            statements
            }

            param => {
            statements
            }

            (param1, paramN) => {
            statements
            }

*/

let user ={
    userName:"Raj",
    price:900,
    welcomeFunction:function(){
        return `${this.userName} hi, welcome to JavaScript` //this refer the current instance/object
    },
    getThis:function(){
        return this;
    }
}

console.log(user.welcomeFunction());
console.log(user.getThis());

user.userName = "Nag"

console.log(user.welcomeFunction());
console.log(user.getThis());

/*

function HelloWorld(){
    console.log("hello world");
}

HelloWorld();

*/

/* 

let HelloWorld = function(){
    console.log("hello world");
}

HelloWorld()

*/

let HelloWorld = () =>{
    console.log("Hello World");
}

HelloWorld()

// let addTwoNumber = (num1,num2)=>{
//     return num1+num2
// }
// let addTwoNumber = (num1,num2)=>num1+num2
let addTwoNumber = (num1,num2)=>(num1+num2)

console.log(addTwoNumber(5,5))

let returnObj =()=>({user:"naveen"}) // to return object directly '()' is must

console.log(returnObj());
