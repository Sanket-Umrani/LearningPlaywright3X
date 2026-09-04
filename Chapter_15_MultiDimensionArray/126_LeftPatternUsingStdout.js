// *****
// ****
// ***
// **
// *

let n = 5;
// for(let i=n;i>=1;i--)
//  {       
//     for(let j=1;j<=i;j++)
//     {
//         process.stdout.write("*");
//     }
//     console.log("");
// }

let rows=[5,4,3,2,1];
for (let row of rows)
{
    for(let star of"*".repeat(row))
    {
process.stdout.write(star);
    }
    console.log();
}