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

//3.Function Expression

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
console.log(StudentDetail("rahul","CSE-Ai",117000,200,"AI Trip PLanner","78%"));
console.log(StudentDetail("Vivek","CSE",117000,200,"AI Trip PLanner","78%"));
