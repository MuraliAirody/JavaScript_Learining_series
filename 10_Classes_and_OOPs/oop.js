const user ={
    username:"raj",
    login:true,
    greeting:function(){
        // console.log(`hello ${username}`); //username is not defined, its confused between which context does it need to refer
        console.log(`hello ${this.username}`); //referring current context username
    },
    getThis:()=>{   //In JavaScript, arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical context.
        // let username = "rajesh"
        // console.log("username inside getThis",this.username);
        return this
    },
    getThisAgain:function(){ //On the other hand, regular functions (defined with the function keyword) do have their own this context, which is why getThisAgain returns the user object.
        let username = "rajesh"
        console.log("username inside getThisAgain",username); //this.username returns "raj"
        return this
    }
}

//object literal  
/*
console.log(user.greeting());

console.log(user.getThis());
console.log(user.getThisAgain());
console.log(this);

*/

function Car(company,seats,color,onRoad){
    this.company = company  //this also differentiate the current context variable and parameter
    this.seats = seats
    this.color = color
    this.onRoad = onRoad

    greeting=function(){
      console.log(`the car company ${company}`);
    }

    return this
}

const car1 = Car("TATA",4,"White",true)
const car2 = Car("Hond",4,"Black",false) //cureent context variable over ride 
//to avoid this situation we need to create a new objects

const car3 = new Car("Ford",4,"White",true)
const car4 = new Car("Mustang",4,"White",true)

console.log(car1);
console.log(car2); //both car1 and car2 having same details

console.log(car3);
console.log(car4);
 
