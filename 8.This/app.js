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

///Call and Apply==> Basic Chef(kitchen )
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

