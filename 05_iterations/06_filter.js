//filter

const coding = ["js", "ruby", "java", "python", "cpp"]

let items = coding.forEach((item)=>{
    return item;
})

console.log(items); //for each not return any values

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nums = myNums.filter( (num) => {
    return num > 4
} )
console.log(nums);



const newNums = []

myNums.forEach( (num) => {
    if (num%2 == 0) {
        newNums.push(num)
    }
} )

console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks);

  userBooks = books.filter( (bk) => { 
    return bk.edition >= 2000 && bk.genre === "History"
})
  console.log(userBooks);

///////prime numbers

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num){
    for(let i=2;i<num;i++)
    {
        if(num%i===0){
            return false;
        }
    }

    return num>1;
}

const prime = array.filter(isPrime)
console.log(`prime nums ${prime}`)