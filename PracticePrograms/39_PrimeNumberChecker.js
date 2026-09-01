const prompt=require("prompt-sync")();

let num=Number(prompt("Enter appropriate Number of your Choice : "));
let count=0;

for(let i=1;i<=num;i++)
{
    if(num%i===0)
    {
        count++;
    }
    
}
if(count===2)
{
    console.log("Number is a Prime Number");
}
else{
    console.log("Number is not a prime number");
}
