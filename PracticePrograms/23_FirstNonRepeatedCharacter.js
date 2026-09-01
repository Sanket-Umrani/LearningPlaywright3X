//Read a string and print the first character that does not repeat anywhere in the string. Print 'None' if every character repeats. This is one of the most frequently asked SDET interview questions.

const prompt=require("prompt-sync")();
let str=String(prompt("Enter appropriate text of your choice : "));
console.log(str.length);//5
let occurence={};
for(let i=0;i<str.length;i++)
{
    let ch=str[i];
    if(occurence[ch])
    {
        occurence[ch]++
    }
    else{
        occurence[ch]=1;
    }
    //str=swiss
    //occurrence[s]=3; occurence[w]=1;occurence[i]=1
    //str=deed
    //occurence[d]=2;occurence[e]=2
}
let result="None";
for(let i=0;i<str.length;i++)
{
    let ch=str[i];
    if(occurence[ch]===1)
    {
        result=ch;
        break;

    }
    
}
console.log(result);
// w is printed if only one repeated letter from left to right, but if allrepeated then None will be printed as per let result="None";
