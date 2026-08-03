function greet(name)
{
    return `Hi,${name}!`;
}
const greet1=function(name1)
{
    return `Hi,${name1}!`;
}
//Arrow Function
const greet2=(name2)=>`Hi,${name2}!`;
// Arrow Fn

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
    console.log(greet('Sanket'));//Hi Sanket! will be printed on console because the function greet() returns "Hi Sanket!" to the caller.
console.log(greet1('Ajit'));//Hi Ajit! will be printed on console because the function greet1() returns "Hi Ajit!" to the caller.
console.log(greet2('Umrani'));//Hi Umrani! will be printed on console because the function greet2() returns "Hi Umrani!" to the caller.