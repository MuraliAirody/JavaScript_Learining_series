const isLoggedIn = "yes"

if(isLoggedIn){  //without any boolean value the conditional statement operate on some truthy and falsy
    console.log("user logged in successfully");
}else{
    console.log("user not logged in");
}
/*

conditional statement boolean answers in following cases

    falsy values
        false, 0, -0, BigInt 0n, "", null, undefined, NaN

    truthy values
        "0", 'false', " ", [], {}, function(){}
*/
const userRoles = []

if(userRoles){  
    console.log("have roles");
}else{
    console.log("no roles");
}

//checking for empty array
if(userRoles.length==0){
    console.log("user dont have any roles");
}

const userDetails ={}
if(Object.keys(userDetails).length==0){
    console.log("user details are not available");
}

/* 
  Nullish coalescing operator (??)

  The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand
  when its left-hand side operand is null or undefined, 
  and otherwise returns its left-hand side operand.
*/

const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42

/*
const valD = null || true ?? 'default value for D'  //getting error bcz we should use parenthesis 
console.log(valD)
*/

const valD = (null || true) ?? "default value for D"
console.log(valD)

const valE =  null ?? 10 ?? 20  
console.log(valE)


// Ternary Operator

// condition ? true : false

const totalScore = 100
totalScore <= 80 ? console.log("less than 80") : console.log("more than 80")
/*
  before ':' is for true case and after ':' is for false case
*/
