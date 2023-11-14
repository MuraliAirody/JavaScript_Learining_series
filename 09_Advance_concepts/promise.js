/*
The Promise object represents the eventual completion (or failure) of an asynchronous 
operation and its resulting value.
   Do an async task
   DB calls, cryptography, network
*/

const firstPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
          console.log("Async performed in first promise")
          resolve()
    },1000)
})

firstPromise.then(()=>{   //then is directly connected with the resolve 
    console.log("first promise resolved");
})

new Promise((resolve,reject)=>{
   setTimeout(()=>{
      console.log("Async performed  in second promise")
      resolve()
   })
}).then(()=>{
    console.log("Promise 2 resolved")
})

const thirdPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({"userName":"Ganesh","user_id":"123"})
    })
})
thirdPromise.then((userDetails)=>{
   console.log(userDetails)
})

const fourthPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const userData = {"userName":"Ganesh","user_id":"123"}
        const error = false;
        if(!error){
            resolve(userData)
        }else{
            reject("ERROR: Something Went Wrong")
        }
    },1000)
})
fourthPromise.then((userDetails)=>{
   return userDetails.userName
}).then((name)=>{
    console.log(name);
}).catch((error)=>{  // cath will call only if then doest execute (in reject scenario)
    console.error(error)
}).finally(()=>{  // finally is a method of promise instance, ot schedules a function to be called when a function is settled(either resolve or reject)
    console.log("promise is either resolved or rejected")
})



const fifthPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const data = {"language":"Java script","id":"123"}
        const error = false;
        if(!error){
            resolve(data)
        }else{
            reject("ERROR: JS Went Wrong")
        }
    },1000)
})

async function fifthPromiseConsume(){
  try {
    const data =  await fifthPromise
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fifthPromiseConsume()


// async function getUserData(){
//     try {
//         const userData =await fetch('https://jsonplaceholder.typicode.com/users/')
//         // const userData =await fetch('https://api.github.com/users/MuraliAirody')
//         const data = await userData.json()
//         console.log(data)
//     } catch (error) {
//         console.log("error message is ",error);
//     }
// }

// getUserData()

fetch('https://api.github.com/users/MuraliAirody')
.then((resolve)=>{
    // console.log("data are ",resolve.json())  //attempting to log in before the resolve is fixed.
    return resolve.json()  // response.json() is an asynchronous function. It returns a Promise
                           //Bind it inside then and catch it as an async function because it takes time to resolve.
    
}).then((data)=>{
   console.log("data is ",data);
}).catch((error)=>{
    console.log(error);
})