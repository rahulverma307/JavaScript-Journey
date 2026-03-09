// notification

function createToaster(config){
    return function(notification){
      let div=document.createElement("div");
      div.className=`fixed bg-grey-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX==="right"?"right-10":left-10}`
      div.sty
    };
}

let toaster=createToaster({
    positionX:"right",
    positionY:"top",
    theme:"dark",
    duration:3
})
toaster("This is a dummy notification")