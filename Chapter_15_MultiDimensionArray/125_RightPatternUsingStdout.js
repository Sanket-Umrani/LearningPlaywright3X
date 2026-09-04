// n = 3
// *
// * *
// * * *

const process = require("process");

let n = 3;
// for (let i = 1; i <= n; i++) {
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log("");  
// }
// for (let i=0; i < n; i++) {
//     for(let j=0;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log("");  
// }


let rows=[1,2,3];

for(let row of rows)
{
    for(let star of "*".repeat(row))
    {
        process.stdout.write(star);
    }
    console.log();
}

/**
 * First outer iteration
row = 1

This:

"*".repeat(row)

becomes:

"*".repeat(1)

Result:

"*"

Then:

for (let star of "*")

There is one character:

star = "*"

Print it:

*

Then console.log() → next line.

Second outer iteration
row = 2

This:

"*".repeat(2)

produces:

"**"

Now:

for (let star of "**")

runs twice:

star = "*"
star = "*"

So:

**

Then new line.

Third outer iteration
row = 3

This:

"*".repeat(3)

produces:

"***"

Then:

for (let star of "***")

runs three times:

star = "*"
star = "*"
star = "*"

Output:

***

Final result:

*
**
***
 */