//Type 1 No paramter No return value->Final returned value is undefined
function greet()
{
    console.log("Hi");
}
//Call
greet();
greet();
greet();
//Every JavaScript function returns a value. If no return value is specified, the function returns undefined.
let output=greet(); //here output will be undefined because the function greet() does not return any value.
console.log(output);//undefined will be printed on console because the function greet() does not return any value.

function openBrowser() 
{
    console.log("Browser is opened");
}
openBrowser();//Here we just want to open the browser and not return any value. So, we will not use return statement in this function.
