let str="Login_Test_Pass_001";
// slice(start, end) — negative indexes supported ( start, end-1)
console.log(str.slice(0,5));
console.log(str.slice(11));
console.log(str.slice(-5));
let testNumber = str.slice(-3);
// substring(start, end) — no negatives (treats as 0)
console.log(str.substring(6,10));
// at() for single chars
console.log(str.at(0));   // "L"
console.log(str.at(-1));  // "1"