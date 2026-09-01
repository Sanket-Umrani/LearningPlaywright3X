//Write a Javascript program to reverse a given string.
const prompt=require("prompt-sync")();
let str=String(prompt("Enter an appropriate word to reverse it : "));
let reverse="";
for(let i=str.length-1;i>=0;i--)
{
    reverse+=str[i];
}
console.log("The reverse of a given string is : ",reverse);