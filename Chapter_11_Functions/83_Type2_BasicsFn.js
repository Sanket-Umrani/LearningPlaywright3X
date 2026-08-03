//Type 2 Functions
//With argument/paramter but with no return type
function greetByname(name) //here name is a paramter which is passed to the function greetByname()
{
    console.log("Hi ",name)
}
greetByname("Sanket");//here "Sanket" is an argument which is passed to the function greetByname()
let name=greetByname("Ajit"); //here "Ajit" is an argument which is passed to the function greetByname() and the returned value will be undefined because the function greetByname() does not return any value.
console.log(name);//undefined will be printed on console because the function greetByname() does not return any value.