// function startBrowser(){
//     let name="edge";
//     function installBrowser()//nested function accessing a variable 'name' from its outer function.
//     {
//         console.log(name); 
//         let fail=true;
//         if(true)
//         {
//             console.log("Failed");
//         }
//     }
//     return installBrowser(); 
//     //here () is used to call the function and return the value of installBrowser() and hence cannot use it with return keyword to return the function itself.
//     // Instead we can use return installBrowser; to return the function itself and call it later.
    
// }
// console.log(fail); // gives reference error because let fail=true is not defined in this scope
// installBrowser();//gives Reference Error because installBrowser defined inside startbrwser() scope and called outside of it
// const runTc=startBrowser();
// runTc(); //Type Error 

//removing the () from return installBrowser(); will return the function itself and can be called later.

function startBrowser()
{
    let name="edge";
    function installBrowser()
    {
        console.log(name);
        let fail=true;
        if(true)
        {
            console.log("Failed");
        }
    }
    return installBrowser;
}
const runTc=startBrowser();//returns the function installBrowser and assigns it to runTc
runTc(); // now this will work and print "edge" and "Failed"

/**
 * return installBrowser(); Call the function and return its result.
 * return installBrowser; Return the function itself so I can call it later.
 * installBrowser()   // CALL the function
 * installBrowser     // REFER to the function itself
 */