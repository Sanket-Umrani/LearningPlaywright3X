const prompt=require("prompt-sync")();
let n=Number(prompt("Enter the count of stars : "));
for(let i=1;i<=n;i++)
{
    let row="";
    for(let j=1;j<=n-i;j++)
    {
        row=row+" ";
    }
    for(let j=1;j<=2*i-1;j++)
    {
        row=row+"*";
    }
    console.log(row);
}