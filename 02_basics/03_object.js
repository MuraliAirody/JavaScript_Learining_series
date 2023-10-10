/* object  singleton */

// Object.create

// object literal

let key = Symbol("key")

const id = 156

const user_details = {
    name:"userName",     
    company:"abc",
    address:"xyz",
    isLogged:true,
    lastLoggedIn:["Monday","Friday"],
    "full name":"userName user",
    [key]:"key value",
    [id]:500,
    myFunction:function(){
        console.log("hello world")
    }
}

console.log(user_details.name);
                                             //the type of all the key are string 
console.log(user_details["lastLoggedIn"]);  // so if want to fetch the details by using[] key should be in string form

// console.log(user_details.full name); // cant access full name by using dot operator

console.log(user_details["full name"]); 

console.log(user_details[key]);
// console.log(typeof user_details.key);

console.log(user_details[id]);

console.log(user_details.myFunction());


user_details.anotherFunction = function(){
    console.log("hellloooo worlddddd");
}

user_details.anotherFunction();

console.log(user_details);
