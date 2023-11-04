
let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2 //index++ 
// }

let myArray = ['Apple', "orange", "banana"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// do-while loop enter the scope at a first time without checking the condition,
//here score value is already against the condition, but do-while execute at least once in an execution time
let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);    