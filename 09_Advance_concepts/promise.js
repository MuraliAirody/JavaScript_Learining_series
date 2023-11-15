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



fetch('htt://api.github.com/users/MuraliAirody')
  .then(response => response.json())
  .then(data => {
    console.log('Fetch completed:', data);
  }).catch((error)=>{
    console.error(error)
  })

// Using Promise with setTimeout and 0ms timeout (macro-task)
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise with setTimeout completed');
  }, 0);
});

myPromise.then(result => {
  console.log(result);
});

/* 
 The micro-task (Promise task) executes before the macro-task (fetch,Timeout task),
 demonstrating the priority of the micro-task queue over the macro-task queue.

fetch initiates a network request (macro-task).
The fetch function returns a Promise.
The first .then callback, which parses the JSON response, is added to the micro-task queue.
The second .then callback, which contains the console.log statement, is also added to the micro-task queue.
When the macro-task (network request) is complete, the micro-task queue is processed, and the .then callbacks are executed.

*/