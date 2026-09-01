let browser=["chrome","safari","firefox","opera","edge"];
console.log(browser.length);//5

browser.pop() //removes last element from an array
console.log(browser); //["chrome","safari","firefox","opera"];

let removed=browser.shift(); //removes first element from an array
console.log(browser);//["safari","firefox","opera"]; //prints after the first element is removed
console.log(removed); //"chrome"//prints the removed element
console.log(browser.length);
//Using For loop to iterate and print the elements of an array
for(let i=0;i<browser.length;i++)
{
   // browser[i];
    if(browser[i]==="opera")
    {
        console.log("Opera Does not support Automation Now")
    }
    else{
console.log(browser[i]);
    }
    
}
