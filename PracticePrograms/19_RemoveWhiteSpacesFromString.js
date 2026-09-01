//Write a program to remove all white spaces from a given string.
// const prompt=require("prompt-sync")();
// let str=String(prompt("Enter appropriate text of your choice : "));

// let result=str.replace(/\s/g, "");
// console.log("Orginal String: ",str);
// console.log("String after whitespaces removed: ",result);

//OR
const prompt=require("prompt-sync")();
let str=String(prompt("Enter appropriate text of your choice : "));
let result="";
for (let i = 0; i < str.length; i++)
     { if (str[i] !== " ")
         { result += str[i]; 

         } 
        } 
        console.log("Original String : ",str);
        console.log("String after removed spaces : ",result);
        