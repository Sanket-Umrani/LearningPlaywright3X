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
console.log(getEnv());//Staging will be printed on console because the function getEnv() returns "Staging" to the caller.

//Multiline Arrow Function
const getResult=(score)=>
{
    if(score>=35) return "Pass";return "Fail";
}
console.log(getResult(45));//Pass will be printed on console because the function getResult() returns "Pass" to the caller.
console.log(getResult(25));//Fail will be printed on console because the function getResult() returns "Fail" to the caller.