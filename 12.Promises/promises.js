/////Jai Shree Ram/////

// we dont use this syntax//

// function prepareOrderCB(dish,cb){
//     setTimeout(() => cb(null,{dish,status:"prepared"}),1000)
// }

// function pickupOrderCB(order,cb){
//     setTimeout(() => cb(null,{...order,status:"picked up"}),1000)
// }

// function deliverOrder(order,cb){
//     setTimeout(() => cb(null,{...order,status:"delivered"}),1000)
// }

// prepareOrderCB("biryani",(err,order)=>{
//     if(err) return console.log(err);
//     pickupOrderCB(order,(err,order)=>{
//         if(err) return console.log(err)
//     })
// })

///  pending ,fulfilled, rejected

function prepareOrder(dish){
    return new Promise((resolve,reject)=>{
        if(!dish){
            reject(new Error("No dish is there"))
            return 
        }
        console.log(`${dish} is ready`);
        resolve({dish,status:"prepared"})   
    },1000)
}


function pickupOrder(order){
    return new Promise((resolve,reject)=>{
        
        console.log(`${order} is ready`);
        resolve({dish,status:"pickuped"})   
    },1000)
}

function deliverOrder(order){
    return new Promise((resolve,reject)=>{
        
        console.log(`${order} is ready`);
        resolve({dish,status:"delivered"})   
    },1000)
}


prepareOrder("Chai")
 .then(order=>pickupOrder(order))
 .then(order=>deliverOrder(order))
 .catch()



//// promise chaining

function asynFunc2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data2");
      resolve("success")
    },4000)
  })
}
