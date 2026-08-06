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
