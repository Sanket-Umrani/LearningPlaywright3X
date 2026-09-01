//Write a program to count the number of words in a given string.
const prompt=require("prompt-sync")();
let str=String(prompt("Enter an appropriate text of your choice: "));

let words=str.trim().split(/\s+/); 
//trim() removes beginning and ending spaces and split(/\s+/) has \s+ which removes multiple spaced in between the words and split() method converts into a Array
// For Example : str= "    JavaScript is easy to learn     ";
//trim will do like str="JavaScript is easy to learn"
//split(/\s+/) will do like  str=["JavaScript","is","easy","to","learn"]
//so a total of 5 words
let count=words.length;
console.log("Original String : ",str);
console.log("Count of words in the Original String includes : ",count);

//OR

//Handling empty String case
// const prompt=require("prompt-sync")();
// let str=String(prompt("Enter an appropriate text of your choice: "));
// let count = str.trim() === "" ? 0 : str.trim().split(/\s+/).length; //ternary operator condition ? valueIfTrue : valueIfFalse
// console.log("Number of words:", count);