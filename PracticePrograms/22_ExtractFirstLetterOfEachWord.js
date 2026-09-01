// Extract and print the first letter of each word in a string.
const prompt=require("prompt-sync")();
let str=String(prompt("Enter appropriate text of your choice : "));
let result="";
let words=str.trim().split(/\s+/);
console.log(words.length);
for(let i=0;i<words.length;i++)
{
result+=words[i].charAt(0);
}
console.log(result);