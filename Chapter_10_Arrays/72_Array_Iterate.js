let tests=["login","checkout","search"];
for(let i=0;i<tests.length;i++) //normal for loop
{
    console.log(i,tests[i]);
}
console.log("------")

//for...of (cleanest of values)

for(let test of tests) //for...of
{
    console.log(test);
}
console.log("-------")
//forEach.....no return value
tests.forEach((test,index)=> {
    console.log(`${index}:${test}`)
});
console.log("-----------")

// entries()- index+value
for(let [i,test] of tests.entries())
{
    console.log(i,test);
}
console.log("---------")

let students = ["methis", "senthil", "ajay", "rahul"];

for(let student in students)
{
    console.log(student,"->",students[student]);
}

/**
 * Important difference: 
 * for...of gives you the values, 
 * while for...in gives you the indexes (keys). 
 * For arrays, prefer for...of or forEach.
 */

/**
 * Practical priority for Playwright
Loop	         Playwright usage	                Why
for...of	    ⭐⭐⭐⭐⭐ Very common	 Run actions on each test/data/item
forEach()	    ⭐⭐⭐⭐ Common	          Simple iteration, especially data processing
Traditional for	⭐⭐⭐ Common	            When you need index/control
for...in	    ⭐ Rare	                   Mostly for object properties
entries()	    ⭐⭐ Sometimes	          When you need both index + value
 */

//Practice 
//for...of
for(testing of tests)
{
    console.log(testing);
}
//forEach
tests.forEach((test,index)=>
{
console.log(`${index}:${test}`)
})
//for...in
for(let stdnt in students)
{
    console.log(stdnt,"->",students[stdnt]);
}
//for...of entries()
for(let [i,test] of tests.entries())
{
    console.log(i,test);
}