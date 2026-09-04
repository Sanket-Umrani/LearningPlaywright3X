// let a = { status: "pass" };
// console.log(a.status);
// console.log(a["status"]);

// let a1 = { status: 'pass' };
// console.log(a1.status);

// keys are case sensitive.
// let a22 = { status: "pass", Status: "fail" };
// console.log(a22["status"]);
// console.log(a22["Status"]);

let a = { status: "pass" };
let b = a;  //Copy the reference
b.status = "fail";
console.log(a.status);


let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);
// as c and d are pointing to two different objects in memory,they are not equal and are thus false, even though they have the same properties and values. 
//to make it equal and true, c and d should point to the same object in memory,like this : c = d; // Now c and d point to the same object in memory

const t_json = {
    "name": "pramod",
    "age": 10
};
console.log(t_json);

const t_js = {
    name: "pramod",
    age: 10
};
console.log(t_js);

/**
 * JavaScript object:
{ name: "pramod" }       ✅
{ "name": "pramod" }     ✅
 {"name": pramod }       ❌
 

JSON:
{ "name": "pramod" }     ✅
{ name: "pramod" }       ❌
 */