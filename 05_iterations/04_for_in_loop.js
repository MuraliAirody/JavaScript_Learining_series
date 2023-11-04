const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//for-in loop return the key/index from that can fetch the value
for (const key in myObject) {
    console.log(`${key} shortcut of ${myObject[key]}`);
}

let languages = ["JAVA","JAVA SCRIPT","PYTHON","SWIFT","CPP"]
for (const key in languages) {
  console.log(`list of languages ${Number(key)+1}: ${languages[key]}`);
}

const map = new Map();
map.set("Car","BMW")
map.set("Bike","YAMAHA")
map.set("Truck","VOLVO")
map.set("Plane","Air India")

for (const key in map) {
    console.log(map.get(key));
}