//Write a JavaScript program to check if two strings are anagrams of each other.
const prompt=require("prompt-sync")();
let str1=String(prompt("Enter an appropriate word for Anagram Comparison : "));
let str2=String(prompt("Enter an appropriate word for Anagram Comparison : "));

function areAnagrams(str1,str2)
{
    //convert both strings to lowercase
     str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // If lengths are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }
    // Sort the characters of both strings
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}
if (areAnagrams(str1, str2)) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}