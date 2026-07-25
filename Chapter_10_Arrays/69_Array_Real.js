let browser=["chrome","safari","firefox","opera","edge"];
console.log(browser.length);

browser.pop() //removes last element from an array
console.log(browser);

let removed=browser.shift(); //removes first element from an array
console.log(browser);//prints after the first element is removed
console.log(removed); //prints the removed element

//Using For loop to iterate and print the elements of an array
for(let i=0;i<browser.length;i++)
{
    browser[i];
    if(browser[i]==="opera")
    {
        console.log("Opera Does not support Automation Now")
    }
}
