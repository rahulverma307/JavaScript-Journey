
var name="Manoj Sinha";
var name="Rahul"  // We re-assign and re - Declared varibale
name="vivek"
console.log(name); // Developers avoid var because it is function-scoped, can be accessed outside blocks, and may cause bugs due to hoisting and scope confusion.

let car="lambo" // Reassigned and not declared and  // Blocked Scope
console.log(car);
car="BMW"

const train="Vandhe Bharta"  // no Reassigned and no Redeclared


// naming Convention
let carSpeed=200;
const _privetlog="Altman";
let _=0; // _ is often used for temporary values or ignored parameters.

//TDZ=temporal dead Zone

let x = 5;

if (true) {
//   console.log(x); // ReferenceError (TDZ)
  let x = 10;
}


//const

const obj ={a:5};
obj.a="10"// we can change obj inside value 
console.log(obj);
obj={a:45} // we can not change this
console.log(obj);


