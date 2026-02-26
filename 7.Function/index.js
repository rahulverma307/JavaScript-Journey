//Function-> A fn is a reausable block of code that performs a task.

//1.Function Declaration
function brewpoints(ingredients,dose){
    return `Total Price is :${ingredients*dose}`
}
console.log(brewpoints(45,2));// Total Price is :90

//2.Function declaration ar Hoisted
console.log(sayMyName("Rahul",25));

function sayMyName(name,age){
    return `my name: ${name}:and age is ${age}`
}
/**
 * What is hoisting?
Hoisting is JavaScript behavior where variable and function declarations 
are moved to the top of their scope during memory creation phase.
 */

//3.Function Expression ==> are not Hoisted
//-Because const and let stay in Temporal Dead Zone(TDZ)
//-Only Variable is hoisted, not value.

const StudentDetail=function (name,branch,fee,duefee,project,attendance){
     return {
        name:`Student Name is ${name}`,
        branch:`${branch}`,
        fee:`${fee}`,
        duefee:`${duefee}`,
        project:`${project}`,
        attendance:`${attendance},`
     }
}
console.log(StudentDetail("Rahul","CSE-Ai",117000,200,"AI Trip PLanner","78%"));
console.log(StudentDetail("Vivek","CSE",117000,200,"AI Trip PLanner","78%"));

// Arrow Function=> NO own this, No arguments Object, Cannot use new 
const distilEssence=(ingredients)=>{
   return `Mixing elexier with ${ingredients}`
}
console.log(distilEssence);

//4.Argument Object==>Inside normal functions, JavaScript automatically
//  creates a special object called arguments.it store all value we pass to a function

function demo(a,b){
    console.log(arguments); 
}
demo(4,8)//[Arguments] { '0': 4, '1': 8 }

//5.Arrow functions DO NOT have arguments

const demos=()=>{
    console.log(arguments); 
}
//demos(1,2,3)// this returne error

//6.In modern JS we use rest operator 

function demo1(...nums){
    console.log(nums);
}
demo1(4,5,6,7,8)//[ 4, 5, 6, 7, 8 ]

/// 7.
function oldBrewingLogs(){
    console.log("type",typeof arguments);// type is object
    console.log("is Array:",Array.isArray(arguments));//False
    console.log(arguments);// this give [Arguments] { '0': 'hello', '1': 'name' } 
    const argsArray=Array.from(arguments);// convert arguments into array then we can use array properties

    console.log(argsArray);// and this [ 'hello', 'name' ]
}
oldBrewingLogs("hello","name") 


//8. arrow fn does not have arguments object
const arrowbrew=()=>{
    console.log(arguments);
}
arrowbrew()//this gives a long error and crash program and how to hande this use try and catch

 const arrowbrew1=()=>{
    try {
        console.log(arguments); 
    } catch (e) {
        console.log(e);  
    }
}
arrowbrew1()//

//9. Pure and Impure function

let globalCount=0;

function brewAndCount(name){
    globalCount++;
}
brewAndCount()


