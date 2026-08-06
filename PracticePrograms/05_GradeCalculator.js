const prompt=require("prompt-sync")();
let score=Number(prompt("Enter your Score"));
if(score>=90 && score<=100)
{
    console.log("Your Grade is A");
}
else if(score>=80 && score<=89)
{
    console.log("Your Grade is B");
}
else if(score>=70 && score <=79)
{
    console.log("Your Grade is C");
}
else if(score>=60 && score<=69)
{
    console.log("Your Grade is D");
}
else
{
    console.log("Your Grade is F");
}