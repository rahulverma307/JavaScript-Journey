// Undefined->undefined means a variable is declared but not assigned a value yet.

let name;
console.log(name);//undefined--typeof--undefined.

//2.Null
// null means intentional empty value
let user=null;
console.log(user);// null

console.log(typeof user);//Object

//3.Symbol->is a primitive data type introduced in ES6

//it creates unique values.

let id1=Symbol()
let id2=Symbol()
console.log(id1==id2);//false
console.log(typeof id1);// symbol



