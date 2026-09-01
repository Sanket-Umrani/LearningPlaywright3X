//Normal Function declaration
function doubleMe(a)
{
    return a*2;
}
//Function Expression
const doubleMe1=function(a1)
{
    return a1*2;
}
//Arrow Function
const doubleMe2=(a2)=>a2*2;
console.log(doubleMe2(10));

const getEnv=()=>"Staging";
console.log(getEnv());//Staging will be printed on console because the function getEnv() returns "Staging" to the caller. with No paramter in ()

//Multiline Arrow Function
const getResult=(score)=>
{
    if(score>=35) 
//     { //traditional if else syntax
// return "Pass";
//     }
//     else{
// return "Fail";
//     }
return "Pass"; return "Fail";//this format is braceless if or single if statement
     
}
console.log(getResult(45));//Pass will be printed on console because the function getResult() returns "Pass" to the caller.
console.log(getResult(25));//Fail will be printed on console because the function getResult() returns "Fail" to the caller.