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
        console.log(`Outer this.crew:${this.crew}`); 
    }
}
filmSet.prepareProps()
