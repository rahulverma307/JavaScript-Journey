// for each

//Print all Number

let number=[44,98,45,12,45,6,8,2,6,4,4,55,99,6,2]
number.forEach(num=>console.log(num))

// Given [10,20,30], print square of each number.
let squareOfNUmber=[10,20,30]
squareOfNUmber.forEach(num=>console.log(num*num))

//Add "Mr." before every name in ["Rahul","Amit"].
let addName=["Rahul","Amit"];
addName.forEach(naam=>console.log("Mr.",naam))

//Map
//Q1
let num=[1,2,3];
let doubled=num.map(n=>n*2)
console.log(doubled);
//Q2
let num1=[10,20,30]
let added=num1.map(add=>add+5)
console.log(added);
//Q3
let naam=["rahul","amit","neha"]
const capital=naam.map(upper=>upper.toUpperCase())
console.log(capital);
//Q4 Convert number to object
let num2=[1,2,3]
let objj=num2.map(obj=>({obj}));
console.log(objj);

//Q5 
let value=[3,5,7];
let square=value.map(val=>val*val)
console.log(square);

//Q6 Get string length

let char=["js","react","node"];
let lengthofString=char.map(len=>len.length)
console.log(lengthofString);

//





