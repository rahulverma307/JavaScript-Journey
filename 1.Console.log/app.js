const randomName="Rahul"
console.log(randomName)

console.warn("Hell code not running")// use for show Warning message
console.error("This Function show error");// use for show error message

const evidance={
    name:"jay",
    age:45,
    working:true
}
console.table(evidance) 
/**
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ name    │ 'jay'  │
│ age     │ 45     │
│ working │ true   │
└─────────┴────────┘
 */

let naam="piyush";
let age=45;
let traveling =false

console.group("Group Of details");
console.log(naam);
console.log(age);
console.log(traveling);
console.groupEnd("ENd");

console.time("Time Start Now");

let Dna = 0;
for (let i = 0; i <= 100; i++) {
    Dna++;
}

console.timeEnd("Time Start Now");






