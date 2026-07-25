//Searching

let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index, or -1 if not found

let arrayindex=results.indexOf("fail"); //1
console.log(arrayindex);

let arrayindex1=results.indexOf("skip");  // -1
console.log(arrayindex1);

// lastIndexOf — searches from the end
let lastindexof=results.lastIndexOf("fail");
console.log(lastindexof);

// includes — returns boolean
let includes=results.includes("error"); // true
console.log(includes);