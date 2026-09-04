//   *
//  ***
// ***** 

let n = 3;
// for(let i=1;i<=n;i++){
//         let row = "";
//         for(let j=1;j<=n-i;j++){
//                row += " ";
//         }
//         for(let j=1;j<=2*i-1;j++){
//             row = row + "*";
//             //process.stdout.write("*");
//         }
//         console.log(row);
//            //console.log("");
// }

let rows=[1,2,3];
for(let row of rows)
{
    for (let space of " ".repeat(n-row))
    
        {
            process.stdout.write(space);
        }

        for (let start of "*".repeat(2*row-1))
        {
            process.stdout.write(start);
        }
    console.log();
}

/**
 * 
 * 
 * For n = 3:

Row	Spaces	Stars
1	2	     1
2	1	     3
3	0	     5
 */

/**
 * 1. Spaces
" ".repeat(n - row)

When row = 1:

" ".repeat(3 - 1)

→ 2 spaces

When row = 2:

" ".repeat(3 - 2)

→ 1 space

When row = 3:

" ".repeat(3 - 3)

→ 0 spaces

2. Stars
"*".repeat(2 * row - 1)

When row = 1:

2 × 1 - 1 = 1

→ *

When row = 2:

2 × 2 - 1 = 3

→ ***

When row = 3:

2 × 3 - 1 = 5

→ *****
 */