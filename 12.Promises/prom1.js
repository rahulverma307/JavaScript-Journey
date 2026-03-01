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
   },2000)
}).then(()=>{
    console.log("Async 2 resolve");
    
})
