//Array Literal preferred
let browsers=["chrome","firefox","safari"];

//Array Constructor
let scores =new Array(3); // [3] and (3) are different | When Array receives one numeric argument, JavaScript treats that number as the array length.|creates an array with length 3 and three empty slots:
scores[0]=1;
let scores1=new Array(1,2,3); // creates [1,2,3] | There are three arguments, so JavaScript treats them as array elements.
let number=new Array(100,200,300,400,500); // creates [100,200,300,400,500] 
let test=Array.of(10,20,30,40,50);
let test1=Array.of(10);
console.log(scores.length);
console.log(scores);
console.log(scores1.length);
console.log(scores1);
console.log(number.length);
console.log(number);
console.log(test.length);
console.log(test);
console.log(test1.length);
console.log(test1);
//Array.from()
let chars=Array.from("Hello");
//["h","e","l","l","o"] A string can be iterated character by character.
console.log(chars.length);

/**
 * new Array()

One number → length
Multiple values → elements

Array.of()

Arguments → elements

Array.from()

Something iterable → array
 */