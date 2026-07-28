// Shallow Copy
// Original array value will not change if you change the copy. 
let original=[1,2,3];
let copy1=[...original];
console.log(original);
console.log(copy1);
console.log("------")
let copy2=original.slice();
console.log(copy2);
console.log("-----")
let copy3=Array.from(original);
console.log(copy3);
console.log("------")
let copy4=original.concat();
console.log(copy4);
console.log("------")
copy1.push(99);
console.log(original);
console.log(copy1);
console.log("----")
// Deep cOPY
let deep_copy_array=original;
deep_copy_array.push(100);
console.log(original);
console.log(deep_copy_array);
console.log("---")
let a=original;
a.push(101);
console.log(original);
console.log(a);