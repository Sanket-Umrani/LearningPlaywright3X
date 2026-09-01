//Normal Function Declaration
function greet(name)
{
return `Hi , ${name}`;
}
//Function as a Expression stored in const
const greet1=function(name1) //here we just remove the function name and convert it to an identifier. This is called function expression.
{
    return `Hi,${name1}`;
}
console.log(greet('Sanket'));//Hi Sanket will be printed on console because the function greet() returns "Hi Sanket" to the caller.
console.log(greet1('Ajit'));//Hi Ajit will be printed on console because the function greet1() returns "Hi Ajit" to the caller.