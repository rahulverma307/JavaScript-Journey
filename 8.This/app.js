// This

// this in browser global code,this refers to the window object.

console.log(this);// Empty object->{}->this is global object ye state

//
function ranverrOnGlobalStage(){
    return typeof this;
}
console.log(ranverrOnGlobalStage());//object
//
function ranveerWithNoScript(){
    // "use strict"
    return this;
}
//console.log(ranveerWithNoScript());//Global Object without strict mode
//
function ranveerWithNoScript1(){
    "use strict"
    return this;
}
//console.log(ranveerWithNoScript1())//undefined in strcit mode
// this with regular function
const bollywoodFilm={
    name:"Bajirao Mastani",
    lead:"Ranveer Singh",
    introduce(){//regular function
        return `${this.lead} performs in ${this.name}`
    }
}
console.log(bollywoodFilm.introduce());//Ranveer Singh performs in Bajirao Mastani

//this with arrow function and interview question
//it is a tricky question
const filmDirector = {
    name: "Sanjay Leela Bhansali",
    cast: ["Ranveer", "Deepika", "Priyanka"],
    announcCast() {
        this.cast.forEach((actor) => {  
            console.log(`${this.name} introduce ${actor}`);
        });
    }
}

filmDirector.announcCast();

// 
const filmSet={
    crew:"Spot boys",
    prepareProps(){
        console.log(`Outer this.crew:${this.crew}`);//Outer this.crew:Spot boys

        function arrangeChairs(){//Regular Nested Function does not inherit this
          console.log(`Inner this.crew:${this.crew}`);
    }
    arrangeChairs();//undefined
    const arrangeLights=()=>{
       console.log(`Arrow this.crew:${this.crew}`);//Arrow this.crew:Spot boys
    }
    arrangeLights();
    },
}
filmSet.prepareProps()

//Detached Methods---interview Question

const actor={
    name:"Ranveer",
    bow(){
        return`${this.name}:takes a bow`
    }
}
const detachedBow=actor.bow
console.log(detachedBow());//undefined:takes a bow



//--------------------ALL THIS concept Complete------------------------------------//

///Call and Apply==> Basic Chef(kitchen )and return result
// Bind==>me kisi ko bhejuga(always return a new function)

//call

function cookdish(ingredient,style){
    return `${this.name} prepares ${ingredient} in ${style} style!`;
};

const sharmaKitchen={
    name:"Sharama ji kitchen"
}

const guptajiKitchen={
    name:"gupta ji kitchen"
}
console.log(cookdish.call(sharmaKitchen,"panner and spices","Muglai"));
// Sharama ji kitchen prepares panner and spices in Muglai style!

//apply->use for array

let guptaOrders=["Chole Kulche","Punjabi Dhaba"]
console.log(cookdish.apply(guptajiKitchen,guptaOrders));
//gupta ji kitchen prepares Chole Kulche in Punjabi Dhaba style!

const bills=[100,30,45,50]
console.log(Math.min.apply(null,bills));
console.log(Math.max(...bills));

//Bind=> retun new function

function reportDelivery(location,status){
    return `${this.name} at ${location}: ${status}`
}

const deliveryboy={name:"Ranveer Singh"}

console.log("Call:",reportDelivery.call(deliveryboy,"Lyari","On Way"));
console.log("Apply:",reportDelivery.apply(deliveryboy,["Mars","Pick Up"]));
console.log("Bind:",reportDelivery.bind(deliveryboy,"Haridwar","What"));

const bindReport=reportDelivery.bind(deliveryboy,"Haridwar","What");
console.log(bindReport());


////




