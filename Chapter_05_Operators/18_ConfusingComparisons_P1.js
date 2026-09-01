// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)

// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------
console.log("" == 0);        
// true   → "" coerced to Number → 0(Empty String to number conversion so 0==0 is true)
console.log("0" == 0);       
// true   → "0" coerced to Number → 0(Zero String to number conversion  so 0==0 is true)
console.log("" == "0");      
// false  → both strings, compared as-is (Both are string, so no conversion only value comparison takes place ""== 0 so it is false)

// === fixes it
console.log("" === 0);       // false (type+value is considered so Empty String and Number comparison is false)
console.log("0" === 0);      // false (type+value is considered so String and Number comparison is false)
console.log("" === "0");     // false ((type+value is considered Both are string,only value comparison takes place ""=== 0 so it is false))