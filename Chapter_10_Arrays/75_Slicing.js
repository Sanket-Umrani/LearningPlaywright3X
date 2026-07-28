// Slice & Combining
let arr=[1,2,3,4,5];
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically 
// take from start to end.
console.log(arr.slice(1,3)); //Index(Value): 0(1);1(2);2(3);3(4);4(5) ---include start index and exclude end index---include start  index 1 having value 2 and exclude end index 3 having value 4 so the value of the indexes will be printed in the output is 2,3
console.log(arr); // [2,3]
console.log(arr.slice(1,2)); 
console.log(arr.slice(-2)); //IndexValue: -5(1),-4(2),-3(3),-2(4),-1(5) ---Output is [4,5] because of index is negative then the value will move towards positive 
console.log(arr.slice(-3)); //IndexValue: -5(1),-4(2),-3(3),-2(4),-1(5)
console.log(arr.slice(0)); //IndexValue: -5(1),-4(2),-3(3),-2(4),-1(5)
console.log(arr.slice(-5)); //IndexValue: -5(1),-4(2),-3(3),-2(4),-1(5)
console.log(arr.slice(-3)); //IndexValue: -5(1),-4(2),-3(3),-2(4),-1(5) ->> 3,4,5
console.log(arr.slice(-3,-5));//IndexValue: -5(1),-4(2),-3(3),-2(4),-1(5) ->> slice(start,end) works if start<end but here -3>-5 so it will show empty array
