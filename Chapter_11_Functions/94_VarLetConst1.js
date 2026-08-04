var a=10;
console.log(a);
//var is a function scoped ---traitor


function printHello1()
{
    console.log("Hello Sanket Umrani")
    var a=20;
    console.log(a);
    if(true)
    {
        var a=30;
        console.log(a);
    }
    console.log(a);
}
printHello1();
console.log(a);
console.log("************")

//let is blocked scoped

let b=20; //Global Scope
console.log(b);//20
function printHello2()
{
    console.log("Hi Sanket");
    let b=30; //local scope
    console.log(b);//30
    if(true)
    {
        let b=5;
        console.log(b);//5 local scope
    }
    console.log("let ->",b);


}
printHello2();
console.log(b);
console.log("*********************")

//let does not permit you to declare the same variable twice in the same scope
let c=10;
console.log(c);
//let c=20; //SyntaxError: Identifier 'c' has already been declared 

//var can be declared multiple times in the same scope
var d=10;
console.log(d);
var d=20;
console.log(d);

const pi=3.14;
console.log(pi);
//pi=3.5; //TypeError: Assignment to constant variable.

const a=[1,2,3];
a.push(4);
console.log(a); // [1,2,3,4] - we can modify the array but cannot reassign it to a new array
function adasd(){

}
