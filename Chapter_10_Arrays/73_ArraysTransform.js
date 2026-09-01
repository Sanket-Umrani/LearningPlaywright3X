let scores=[45,82,91,60,73];
let grades=scores.map(score=>score>=70 ? "Pass":"Fail");
console.log(grades); 
//[ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass' ]
// Map is generally used whenever we want to transform the array into a new array of the same size. 

//Filters
let passing=scores.filter(s=>s>70); //filter the values from the array which are greater than 70
console.log(passing);//[ 82, 91, 73 ]
//map() Take every score and convert it into something else."
//filter() "Look at every score, but only keep the ones that satisfy my condition."

//reduce-accumulates everything into a single value
/**
 * reduce(callback,initial value)
 */
let total = scores.reduce((sum, s) => sum + s, 0); 
//Take the scores array and reduce it to one value. Start sum at 0. For every score s, add s to sum."
/** ((sum, s) => sum + s, 0) is shorter version of 
 * function (sum, s) {
    return sum + s;

}*/ 
console.log(total);
/**
 * sum → accumulator
    s   → current array element
 */

// flat — flattens nested arrays into one level

let nested = [[1, 2], [3, 4], [5]];

console.log(nested.flat()); // [1, 2, 3, 4, 5]

/**
 * map()     → array → transform into new array with same size of earlier
filter()  → array → smaller array
reduce()  → array → ONE value
flat()    → nested array → flatten array
 */

/**
 * reduce(
   callback function,     initial value
   ↓                      ↓
   (sum, s) => sum + s,   0
)
 */