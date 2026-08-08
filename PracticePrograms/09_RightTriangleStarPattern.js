//Print a right triangle pattern using stars. For input n, print n rows where row i has i stars.
const prompt=require("prompt-sync")();
let n=Number(prompt("Enter the count of stars needed"));
//The outer loop controls how many rows are printed.
// If n=4, then i takes values like i=1,i=2,i=3,i=4
//So the loop runs 4 times one for each row
for(let i=1;i<=n;i++) 
{
    let row=""; //Creates an empty string
    for (let j=1;j<=i;j++) //since i=1, the condition is j<=1
    {
        row=row+"*"; // j=1;i=1=>row=*/ (j=1;i=2=>row=* /j=2;i=2=>**)/(j=1;i=3=>row=*/j=2;i=3=>row=**/j=3;i=3=>row=***)
    }
    console.log(row) // * /**/**/***
}


