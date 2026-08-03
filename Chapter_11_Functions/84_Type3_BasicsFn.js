//Type 3 No Paramater/Argument but with return type
function sayHello()
{
    console.log("Hi");
    return "Hello";
}
sayHello();//here the function sayHello() is called and it will print "Hi" on console and return "Hello" to the caller.
let output=sayHello()//here the function sayHello() is called and it will print "Hi" on console and return "Hello" to the caller. The returned value will be stored in variable output.
console.log(output);//here the value of variable output will be printed on console which is "Hello" because the function sayHello() returns "Hello" to the caller.

function greetByHi()
{
    return [1,2,3,4,5,6,7,8];
}
greetByHi();
let result=greetByHi();
console.log(result);