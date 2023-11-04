
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("just printing 5 here");
    }
    //console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`i value in outer loop: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["apple", "orange", "pineapple"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    //console.log(myArray[index]);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}