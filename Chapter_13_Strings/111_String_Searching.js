// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes()
url.includes("staging");  //true
url.includes("production");//false

// startsWith / endsWith
url.startsWith("https");//tue
url.startsWith("http://"); //false
url.endsWith("true"); //true

// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));
console.log(url.indexOf("SPIDERMAN"));
console.log(url.indexOf("/"));
console.log(url.lastIndexOf("/"));
console.log(url.indexOf(""));
console.log(url.lastIndexOf(""));

// ASCII -> A -> 65