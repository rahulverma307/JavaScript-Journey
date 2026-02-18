// Number
let num="4545";
//1.parseInt()-> convert string to number
console.log(parseInt(num));//4545
console.log(parseInt("100px"));//100

//2. parseFloat->Converts string → decimal number
let num1="10.97"
console.log(parseFloat(num1));//10.97

//3. Number->Converts anything into number
let fruit="Mango ,lichi";
let fruit1="100"
console.log(Number(fruit));//Nan
console.log(Number(fruit1));//100
console.log((Number(true)));//1
console.log((Number(false)));//0
console.log((Number(null)));//0
console.log((Number(Symbol)));//Nan
console.log(Number(undefined));// Nan

//4.toFixed()->Fix decimal places
let price=10.567;
console.log(price.toFixed(2));//10.56//typeof String( Because toFixed() is made for formatting numbers for display, not for mathematical calculations.)

//5.Math.floor->always round down.
console.log(Math.floor(4.9));//4

//6.Math,ceil()->Always Round up
console.log(Math.ceil(4.1));//5
//7.Math.max/Math.min

console.log(Math.max(45,87,1,78787));//78787
console.log(Math.min(-999,45,-2,-33));//-999

//8.Math.random 
console.log(Math.random());//ALways generate random number

console.log(Math.random()*10)+1;//generate random number in 1 to 10












