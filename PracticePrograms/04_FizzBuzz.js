const prompt=require("prompt-sync")();
    let num=Number(prompt("Enter a Number:"));
    for(let i=1;i<=num;i++)
    {
        if(i%3===0 && i%5===0) //this is checked in the first place because if we check for 3 and 5 separately then it will print fizz and buzz instead of fizzbuzz and will never arrive at FizzBuzz condition
        {
            console.log("Fizzbuzz")
        }
        else if(i%3===0)
        {
            console.log("Fizz");
        }
        else if(i%5===0)
        {
            console.log("Buzz");
        }
        else
        {
            console.log(i)
        }
    }