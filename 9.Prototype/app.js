// Jai shree Ram
//Prototype

const prithviraj={
    name:"Prithviraj",
    generation:"grandfather",
    cookTraditionalDish(){
        return ` ${this.name} cook an ancient family recipe `
    }
};
// no. one use of protoype is inheritance

const raj=Object.create(prithviraj)
//console.log(raj);//{}
//console.log(raj.name);//Prithviraj
raj.name="raj"
raj.generation="father"
raj.runBusiness=function (){
    return `${this.name} runs the family business`
}
console.log(raj);/**{
  name: 'raj',
  generation: 'father',
  runBusiness: [Function (anonymous)]
} */

  const ranbir=Object.create(raj)
  ranbir.name="ranbir"
  ranbir.generation="son"
  ranbir.makefilms=function(){
    return `${this.name} directs blockbuster movies`
  }

  console.log(ranbir.makefilms());
  console.log(ranbir.runBusiness());
  console.log(ranbir.cookTraditionalDish());
  
  
  //
  Array.prototype.last=function(){
    return this[this.length-1]
  }

  console.log([1,2,3].last());//3

  //
  Array.prototype.mapTwo=function (){
    
  }
  
  






