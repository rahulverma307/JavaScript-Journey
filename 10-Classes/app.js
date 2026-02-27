//Jai Shree Ram

//Class

class Cricketer{
    constructor(name,role){
        this.name=name
        this.role=role
        this.matchedPlayed=0
        this.stamina=100
    }
    introduce(){
    return `${this.name} the ${this.role} | matchesPlayed: ${this.matchedPlayed} | 
    stamina: ${this.stamina}`
}
}

let player1 = new Cricketer("Virat","Batsman")
let player2 = new Cricketer("Jasprit","Bowler")
console.log(player1);

console.log(player1.hasOwnProperty("name"));//true
console.log(typeof Cricketer);// function 


///
class Debutant{
    constructor(name){
        this.name=name
        this.walkout = () => `${this.name} walks out to bat for the first time`
    }
}
const debutant1=new Debutant("shubham")
const somethingFromLastClass=debutant1.walkout

const debutant2 = new Debutant("Yashasvi")

console.log(debutant2.walkout===debutant1.walkout);// false


console.log(somethingFromLastClass());//shubham walks out to bat for the first time



