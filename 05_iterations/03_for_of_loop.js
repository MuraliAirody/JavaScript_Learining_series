

//iterating Array of elements

let arr = [2,5,4,6,8]

for (const iterator of arr) {
    console.log(iterator);
}

//iterating String of char

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet===" ")
     continue;
    else
     console.log(`Each char...${greet}`)
}

const map = new Map();
map.set("Car","BMW")
map.set("Bike","YAMAHA")
map.set("Truck","VOLVO")
map.set("Plane","Air India")

/*
for (const item of map) {
    console.log(item);
} //get entire key and value
*/

for (const [key,value] of map) {
    console.log(`${key} -> ${value}`);
}

const myObject = {
    FU: 'DC',
    FU2: 'MARVEL'
}
//myObject is not iterable

// for (const iterator of myObject) {
//     console.log(iterator);
// }

//Note:  to get the key and values of the object for-in is best option
