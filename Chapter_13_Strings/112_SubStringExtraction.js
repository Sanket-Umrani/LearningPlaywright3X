let str="Login_Test_Pass_001";
// slice(start, end) — negative indexes supported ( start, end-1)
console.log(str.slice(0,5));//Login [Start at index 0, End at index 5-1=4]
console.log(str.slice(11));// Pass_001 [Start at index 11, End at index 17]
console.log(str.slice(-5));//s_001
let testNumber=str.slice(-3);//001
// substring(start, end) — no negatives (treats as 0)
console.log(str.substring(6,10)); //Test [Start at index 6, End at index 10-1=9]
// at() for single chars
console.log(str.at(0));   // "L"
console.log(str.at(-1));  // "1"