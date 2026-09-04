let str = "  Hello, World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// Trim whitespace
console.log(str.trim());
str.trimStart();
str.trimEnd();
// Replace
let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS")); 
//"Test: PASS. Retry: FAIL."  (first replace only)
console.log(msg.replaceAll("FAIL", "PASS"));
console.log(msg.replace(/FAIL/g, "PASS")); // replace all with Regex