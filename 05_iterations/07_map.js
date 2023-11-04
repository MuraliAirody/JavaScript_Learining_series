const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sqrt = myNums.map((item)=>Math.pow(item,2))
console.log(sqrt);

const nested = myNums
               .map((item)=>Math.sqrt(item))
               .map((item)=>Math.round(item))
               .filter((item)=>item>1)

console.log(nested)               