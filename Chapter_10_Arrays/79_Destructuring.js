let[first,second,third]=[10,20,30];
console.log(first);
console.log(second);
console.log(third);
console.log("-----")
// Rest pattern (...) — collects everything left over into a NEW array.
//let [first,second,third]=[10,20,30,40,50];
// Note: cannot reuse first/second/third here, `let` cannot be redeclared
// in the same scope (SyntaxError: Identifier has already been declared).
let [a,b,...rest]=[10,20,30,40,50];
console.log(a);
console.log(b);
console.log(rest);
console.log(a,b,rest);
// Default values — used only when the slot is undefined
let [x = 1, y = 2, z = 99] = [10, 20];
console.log(x, y, z); // 10 20 99
// Skip elements with a hole, and swap without a temp variable
let [, , thirdOnly] = [10, 20, 30];
console.log(thirdOnly); // 30

let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q); // 2 1

/**
 * -An array is an ordered list, indexes start at 0
   -push / pop work at the end, shift / unshift at the beginning, splice anywhere
   -map transforms, filter keeps matches, reduce collapses to one value
   -sort needs (a, b) => a - b for numbers
   -slice copies (safe), splice mutates (changes the original)
   -let b = a is NOT a copy, use [...a] to truly copy

 */