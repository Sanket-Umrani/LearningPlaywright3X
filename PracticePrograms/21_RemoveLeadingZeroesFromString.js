//Write a program to remove leading zeros from a string representation of a number.
const prompt = require("prompt-sync")();

let str = String(prompt("Enter a number with leading zeros: "));

// Remove leading zeros
let result = str.replace(/^0+/, "");
//(/^0+/) 0+ means Find one or more zeros and ^ means occurring at the beginning of the string only and the suffix is not affected if zero exist.

console.log("Original String:", str);
console.log("String after removing leading zeros:", result);