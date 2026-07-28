let scores=[45,82,91,60,73];
let grades=scores.map(score=>score>=70 ? "Pass":"Fail");
console.log(grades);
// Map My app is generally used whenever we want to 
// transform the array into a new array of the same size. 

//Filters
let passing=scores.filter(s=>s>70); //filter the values from the array which are greater than 70
console.log(passing);
