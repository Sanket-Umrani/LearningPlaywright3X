//Array Literal preferred
let browsers=["chrome","firefox","safari"];

//Array Constructor
let scores =new Array(3); // creates [empty x 3]
scores[0]=1;
let scores1=new Array(1,2,3); // creates [1,2,3]
let number=new Array(100,200,300,400,500); // creates [100,200,300,400,500] 
let test=Array.of(10,20,30,40,50);
console.log(test.length);
//Array.from()
let chars=Array.from("Hello");
//["h","e","l","l","o"]
console.log(chars.length);
