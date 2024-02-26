// function outer(){

//     var a = 10;

//     return function inner(){  //function withing its lexical scope environment
//         console.log(a);
//     }
// }

// // outer()()
// const inner = outer()
// inner()


// data hiding

function outer1(){
    var count = 10;
    return function increment(){
        count++;
        console.log(count);
    }
}

let count = outer1()
count()
count()
count()

function outer2(){
    var count = 10
    this.increment = function () {
         count++
         console.log(count);
    }
}
let count2= new outer2()
count2.increment()
count2.increment()


