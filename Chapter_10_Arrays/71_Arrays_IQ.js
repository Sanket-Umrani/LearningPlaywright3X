let nums=[10,25,30,45];
let results=nums.find(temp=>temp>20);
//// find — returns the first element that matches a test(left to right)
console.log(results);
//FindIndex
let index=nums.findIndex(n=>n>20);
console.log(index);

nums.findLast(n=>n>20);
let lastindex=nums.findLastIndex(n=>n>20);
console.log(lastindex);