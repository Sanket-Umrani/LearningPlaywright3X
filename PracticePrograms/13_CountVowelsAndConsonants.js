//Write a program to count the number of vowels and consonants in a given string.
const prompt=require("prompt-sync")();
let str=String(prompt("Enter an appropriate word of your choice: "));
let vowels=0;
let consonants=0;
for(let char of str.toLowerCase()) //for (...of) takes one character at a time and str.lowercase() converts the string to lowercase always
{
if(char >='a'&& char <='z') //checks if it is a letter
{
    if('aeiou'.includes (char))
    {
        vowels++;
    }
    else
    {
        consonants++;
    }
}
}
console.log("Number of vowels",vowels);
console.log("Number of consonants",consonants);
