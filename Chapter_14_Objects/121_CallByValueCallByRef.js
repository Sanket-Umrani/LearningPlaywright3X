// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined
let a = 10;
let b = a; //Copy the value of a to b
b = 99; // b is a copy of a, so changing b does not affect a
console.log(a);//10
console.log(b);//99
a = 90;
console.log(a);//90
console.log(b);//99

//This is Primitives - call by value, as the value is copied to the new variable, so changing the new variable does not affect the original variable.

console.log("-----")

// Objects — the reference value is copied, so both variables point to the same object.
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1; //copy the refeerence of obj1 to obj2, so both point to the same object in memory
obj2.val = 99;
console.log(obj1.val);
//This is Objects - Objects are copied as references to the object., as the reference is copied to the new variable, so changing the new variable affects the original variable.