// Primitive Data types 
//1.String

let firstName ="Virat"
let lastName="Kholi"
console.log(firstName);//"Virat"
console.log(typeof firstName);//string
console.log(firstName.length);//6
console.log(firstName.charAt(2));//r
console.log(firstName.concat(lastName));//ViratKholi
//some important method
//1. Slice-> Extract Part of String

let FullName="Rohit Sharma|Virat|Rishabh"
console.log(FullName.slice(2,12));//hit Sharma

//2.Split->Convert String to Array
console.log(FullName.split("|"));//Split("",|,",")[ 'Rohit Sharma Virat', 'Rishabh' ]

//3.Trim->Remove Extra Spaces
let extra="bonus     ";;
console.log(extra.trim());//bonus

//4.Includes->Check if text Exit
console.log((extra.includes("p")));//false
console.log((extra.includes("o")));//true

//5.replace/replaceall-> modify string
let color="red red red blue blue pink pink orange"
console.log(color.replace("red","black"));// only modify one string red to black.
console.log(color.replaceAll("red","black"));// convert all red to black

//6.toLowerCacse()/toUpperCase()
let lower="jjk gojo mimi";
let upper="SUKUNA,CHOSO";
console.log(lower.toUpperCase());//JJK GOJO MIMI
console.log(upper.toLowerCase());//sukuna,choso

//7.startWith/endWith()
let url="chai.rahul.dev@gmail.com"
console.log(url.startsWith("chai"));//true

//8. .Join()->used to convert array to string
let arr=["kl","tony","gojo","hulk"]
console.log(arr.join("|"));//kl|tony|gojo|hulk

//9.indexOf()-> finds position of a character /word
let str="Hello Jay Shah"
console.log(str.indexOf("ll"));//2

//10.repeat->Repeat string multiple time
console.log(str.repeat(5));//Hello Jay ShahHello Jay ShahHello Jay ShahHello Jay ShahHello Jay Shah

// Interview Question
//1. reverse a String
let FName="Modi"
let rev=FName.split("").reverse().join("")
console.log(rev);//idoM
//2.Check if string contains a word
let word="I love JavaScript"
let contains=word.includes("Java")
console.log(contains);//true

//3.Count how many times a character appears
let fruit="banana";
console.log((fruit));

















