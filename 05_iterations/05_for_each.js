//for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(item){
//     console.log(item)
// })

// coding.forEach((item)=>console.log(item))

function printItems(item){
    console.log("item "+item);
}

coding.forEach(printItems)
coding.forEach((item,index,arr)=>console.log(item+" "+index+" "+arr))

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: ".js"
    },
    {
        languageName: "java",
        languageFileName: ".java"
    },
    {
        languageName: "python",
        languageFileName: ".py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(`Language name ${item.languageName} language file extension ${item.languageFileName}`);
} )