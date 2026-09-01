//Write a program to check if a given string is a palindrome (reads the same forwards and backwards).
const prompt=require("prompt-sync")();
let str=String(prompt("Enter palindrome words : "));
let reverse="";
for(let i=str.length-1;i>=0;i--)
{
reverse=reverse+str[i];
}
console.log("After Palindrome:", reverse);
if(str===reverse)
{
    console.log("It is a palandrome")
}
else{
    console.log("It is not a palindrome")
}