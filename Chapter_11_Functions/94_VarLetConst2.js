var a = 10;
console.log(a);
//var is a function scoped ---traitor


function printHello() {
    console.log("Hello Sanket Umrani")
    var a = 20;
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log(a);
}
printHello();
console.log("************")

//let is blocked scoped

let b = 20; //Global Scope
console.log(b);//20
function printHello() {
    console.log("Hi Sanket");
    let b = 30; //local scope
    console.log(b);//30
    if (true) {
        let b = 5;
        console.log(b);//5 local scope
    }
    console.log("let ->", b);


}
printHello();