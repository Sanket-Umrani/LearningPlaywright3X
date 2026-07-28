// Checking Arrays

// Check if something IS an array
let result=Array.isArray([1,2,3]);
let result1=Array.isArray("a");
console.log(result);
console.log(result1);
// map, filter, reduce

// every — ALL must pass
// GOTCHA: the missing ; below would make ASI glue the next line's [ ... ]
// into an index access -> TypeError. Always end these lines with ;
console.log("--------")
//every
console.log([80,90,100].every(s=>s>70));
console.log([80,90,100].every(s=>s>100));
console.log("-------")
// some — AT LEAST ONE must pass
console.log([80,60,55].some(s=>s>60));
console.log([80,50,40].some(s=>s>90));