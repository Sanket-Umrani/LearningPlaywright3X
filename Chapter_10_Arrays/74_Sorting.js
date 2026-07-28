let fruits=["banana","apple","cherry"];
fruits.sort();//sort is a function so () is needed without it the output will be same as input
console.log(fruits);
//alphabetical by default
let score=[4,3,2];
console.log(score.sort());

// Natural Sorting - Lexicographic / string sort 
let nums=[10,1,21,2];
nums.sort();
console.log(nums); //Overall Expectation is 1,2,10,21 but here it compares like 1,10 and then comapres 2,21 and then prints 1,10,2,21 like all the ones at one side and then followed by twos

// Proper Sorting, Asc , Desc
nums.sort((a,b)=>a-b); //each element from the nums array will be compared with the individual element  and then sorting will be done in Ascending order as a-b is given 
console.log(nums);

// Proper Sorting, Desc ,Asc
nums.sort((a,b)=>b-a);
console.log(nums);
//reverse
nums.reverse();
console.log(nums);