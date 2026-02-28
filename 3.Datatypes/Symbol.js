
const aadhaar_of_mayur=Symbol("aadhaar");

const aadhaar_of_piyush=Symbol("aadhaar");

console.log(typeof aadhaar_of_mayur);//symbol
console.log(aadhaar_of_mayur===aadhaar_of_piyush);//false
console.log(aadhaar_of_mayur.toString());//Symbol(aadhaar)
console.log(aadhaar_of_mayur.description);//aadhaar



const citizenRecord={
   name :"Ved",
   age:21,
   [biometricHash]:"asd47464s6dssd5465",
   [bloaadGroup]:"O+"
};
console.log(Object.keys(citizenRecord));

