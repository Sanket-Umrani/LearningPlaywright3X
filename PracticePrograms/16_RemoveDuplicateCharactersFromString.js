//Write a Javascript program to remove duplicate characters from a string.
const prompt=require("prompt-sync")();
let str=String(prompt("Enter an appropriate characters : "));
let result="";
for(let i=0;i<str.length;i++)
{
    if(!result.includes (str[i])) //the logic checked here is that the result should not include the charcter present in the String given if present then skip it and if not present then add it
    {
        result+=str[i]
    }

}
console.log("String after removing duplicate characters:", result);