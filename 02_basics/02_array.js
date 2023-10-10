const marvel_heros =["iron_man","spider_man","captain_america","hulk"]

const dc_heros = ["batman","black_adam","super_man","aqua _man"]
 
// marvel_heros.push(dc_heros) //this will push the entire dc_heros array in to the marvel_heros
// console.log(marvel_heros); 
// console.log(marvel_heros[4][2]);

const new_heros = marvel_heros.concat(dc_heros) 
console.log(new_heros)

//by using spread operator we can combine 2 array easily

const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros);

const numberArr = [1,2,3,[5,6,7],[8,9,[10,11,[2,5,[8,8]]]]];
console.log(numberArr)
console.log(numberArr.flat(2));
console.log(numberArr.flat(3));

console.log(Array.from("INDIA"))
console.log(Array.isArray("INDIA"))
console.log(Array.of("INDIA","AMERICA","NEPAL"))

console.log(Array.from([1,2,3]))