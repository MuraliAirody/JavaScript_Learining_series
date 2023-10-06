//date

// let createdDate = new Date("July 21, 2023 01:15:00.500")
let createdDate = new Date(2023,9,22,5,3)
let newDate = new Date();
// console.log(Date.now()) //return the time in millisecond

console.log(createdDate);
console.log(createdDate.getMilliseconds());
console.log(createdDate.toLocaleString());

console.log(newDate.toDateString());
console.log(newDate.toISOString());
console.log(newDate.getMonth()+1); //+1 bcz month range 0->11

