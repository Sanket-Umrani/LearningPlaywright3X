const prompt=require("prompt-sync")();
let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

console.log("Before Swapping:");
console.log("a =", a);
console.log("b =", b);

[a, b] = [b, a];

console.log("After Swapping:");
console.log("a =", a);
console.log("b =", b);

//OR

// let a = 10;
// let b = 20;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a + " " + b);

//OR

// const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// let a = input[0];
// let b = input[1];

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a + " " + b);