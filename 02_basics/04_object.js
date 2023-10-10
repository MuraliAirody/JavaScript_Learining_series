// const tinderUser = new Object();
const tinderUser = {}
tinderUser.name = "User"
tinderUser.id = 123
tinderUser.email = "user@tinder.com"
console.log(tinderUser);

// object inside objects
const user_details ={
    fullNames:{
         fullUserName:{
             first_name:"user",
             second_name:"Name"
         },
         fullUserId:{
             first_id:1258,
             second_id:"TIN"
         }
    },
    address:{
          first_address:{
             street:"1st",
             city:"bangalore"
          }
    }
}

console.log(user_details);
console.log(user_details.fullNames.fullUserName.first_name);


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const test ={obj1,obj2}
// console.log(test);

// const test = Object.assign(obj1,obj2) 
// console.log(test);
// console.log(obj1)

// console.log(test === obj1); //obj1  also changed

const test1 = Object.assign({},obj1,obj2)
console.log(test1);
console.log(obj1)

const obj3 = {...obj1,...obj2}
console.log(obj3);


