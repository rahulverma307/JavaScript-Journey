const promiseOne=new Promise(function(resolve,reject){
    // Do an async task=>DB calls,network caal
    setTimeout(function(){
      console.log("Aync task is complete");
      
    },1000)
})