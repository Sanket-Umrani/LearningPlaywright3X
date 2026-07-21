let num=prompt("Enter a Number : ");
num=Number(num); //Converting String to Number
if(num%2===0)
{
    console.log(num + " is Even Number");
    }
    else
    {
        console.log(num + ("is a Odd Number"));
    }

    //ReferenceError: prompt is not defined Does not work in Node.js environment. It works in browser environment.