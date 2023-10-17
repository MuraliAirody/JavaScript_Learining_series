let a  = 20;
var b = 30;
const c = 50;

if(true){   // scope start '{' 

    let a = 200 //"let" block scope of a value
    console.log(a); // ->200,  //suppose if we only initialize the global variable inside scope without declaring, its value become change outside the scope also

    var b = 400 // "var" is not follow any block scope rules, either it may declare inside scope or only initialize value changing outside also 
    
    const c = 252; // should be declared(if we are using same variable as global)

}          //and scope end '}'

console.log(a); // a value pointing the global value //suppose a not declared in global only declared inside the scope it will return error like "a is not defined" 
console.log(b); //not a matter "b" o=is declared only withing scope it will not throw any error
console.log(c); //pointing to global variable, if not global declaration it will throw error

function sayHello(){
    const greet ="hello"

    function userName(){
        const name = "Rajesh"
        console.log(greet+ " "+name);
    }
    // console.log(greet+ " "+name); //name is not defined
    userName()
}

sayHello()

if(true){
    const greet = "Hello"
    if(greet){
        const name = "Rajesh"
        console.log(greet+ " "+name);
    }
    // console.log(greet+ " "+name);
}
/*
function addOne(number){ //function Declaration
    return number+1;
}

console.log(addOne(2));
*/
//we can call the above function as bellow

console.log(addOne(2));  // this is called function hoisting. Interpreter automatically declare function before function call, so the function looks same as above
function addOne(number){ //function Declaration
    return number+1;
}


let addTwo = function(number){ //function Expression, but the function hoisting not works here
    return number+2
}
console.log(addTwo(2));