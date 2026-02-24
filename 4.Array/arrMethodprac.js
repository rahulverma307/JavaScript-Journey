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

//Boolean Conversion

let data=[0,1,"","hello",null]
let bool=data.map(d=>{
    return Boolean(d);
})
console.log(bool);

//Q10
let num3=[1,2,3,4]
let evenOdd= num3.map(convert=>{
 return convert%2===0?"Even":"Odd"
})
console.log(evenOdd);

// Boolean
//Q1=>Get even numbers
let num4=[1,2,3,4,5,6]
let even=num4.filter(a=>a%2===0)
console.log(even);

//Q2 Get numbers greater than 10
let value1=[5,12,8,20,3]
let graeter=value1.filter(a=>a>10);
console.log(graeter);

//Q3 Get words longer than 4 characters

let chaar=["js","react","node","ai"]
let lenFour=chaar.filter(len=>len.length>=4)
console.log(lenFour);
//Q From names, keep only those starting with "R"
let naam1=["Rahul","Amit","Riya","Neha"]
const nameWithR=naam1.filter(alpha=>alpha.includes("R"))
console.log(nameWithR);

//Filter object
let arrofobj=[
 {name:"Rahul",age:22},
 {name:"Amit",age:17},
 {name:"Neha",age:25}
]
let obj=arrofobj.filter(ob=>ob.age>=18)
console.log(obj)

// FIlter + 







