function bootNavigation(maploaded){
    try {
       console.log(`Is Naviagtion is loaded:${maploaded}`);
       if(!maploaded){
        throw new Error('Map was not passed in this function')
       }
        return "NAV-OK"
    } catch (error) {
        console.log(error);
        console.log(`Navigation Failed: ${error.message}`);
        
    }finally{
        console.log("Navigation sequence Completed");
        
    }
}

const status1=bootNavigation(false);
console.log(`result : ${status1}`);
