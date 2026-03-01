/*
const promiseOne=new Promise(function(resolve,reject){
    // Do an async task=>DB calls,network caal
    setTimeout(function(){
      console.log("Aync task is complete");
      resolve()
    },1000)
})
//consume
//then direct connection to resolve
promiseOne.then(function(){
    console.log("Promise consume");
    
})
console.log(promiseOne);

// without varibale me store karke bhi haam promise bana sakte hai

new Promise((resolve,reject)=>{
   setTimeout(()=>{
      console.log("Async task 2");
      resolve()
   },1000)
}).then(()=>{
    console.log("Async 2 resolve");
    
})


/// 3 Example

const promiseThree= new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve({username:"Chai",Email:"Chai@123.com"})
    },1000)
})

promiseThree.then((user)=>{
 console.log(user);
 
})


/// 4 Example

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       let error=true;
       if(!error){
        resolve({username:"Rahul Modi",password:"123"})
       } else{
        reject("Error something went wrong")
       }
    },1000)
})

promiseFour
.then((user)=>{
   console.log(user);
   return user.username
}).then((username)=>{
   console.log(username);
}).catch((err)=>{
   console.log(err);
}).finally(()=>{
   console.log("Finally Promise is Resolved is either rejected");
})


///Example 5

const promiseFive= new Promise((resolve,reject)=>{
   setTimeout(()=>{
      let error=false;
      if(!error){
         resolve({username:"javascript",password:"123"})
      }else{
         reject("Error: js went wrong")
      }
   },1000)
})

async function consumePromiseFive() {
   try {
      let response=await  promiseFive
      console.log(response);
   } catch (error) {
      console.log(error)
   }
}
consumePromiseFive()

*/
//  awaits 

async function getAllUsers(){
try {
    const respose= await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await respose.json()
    console.log(data);
} catch (error) {
   console.log("E",error)
}
}
getAllUsers()