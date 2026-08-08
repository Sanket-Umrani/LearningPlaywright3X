let url = "https://app.vwo.com"; // definition with string data
let status = 'pass';//definition with character data
let message = `Test completed in ${320}ms`;//definition with literal data

// Single quotes
let a = 'hello'; //This is considered as String

// Double quotes
let b = "world"; //This is s String

// Template literals (backticks) — allows expressions & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);

// Multiline
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;

console.log(String(200));
String(true); //  "true"
String(null); // "null"
String([1, 2]); // "[1,2]"