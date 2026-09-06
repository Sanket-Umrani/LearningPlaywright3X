function apiCall(name)
{
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name + ": 200 OK");
        },1000);
    });
}

async function parallelTest()
{
    console.log("Starting  the Test");
    let start=Date.now();

    let [r1,r2,r3]=await Promise.all
    ([apiCall("Auth Service"),
    apiCall("User Service"),
    apiCall("Payment Service")]);
     console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log("Time: ~" + (Date.now() - start) + "ms");

}
// async function parallelTest()
// {
//     console.log("Starting  the Test");
//     let start=Date.now();

//     let [r1,r2,r3]=await Promise.allSettled
//     ([apiCall("Auth Service"),
//     apiCall("User Service"),
//     apiCall("Payment Service")]);
//      console.log(r1);
//     console.log(r2);
//     console.log(r3);
//     console.log("Time: ~" + (Date.now() - start) + "ms");

// }
parallelTest();

/**\
 * Promise.all()
    ↓
Parallel execution
+
All must succeed


Promise.allSettled()
    ↓
Parallel execution
+
I want the result of EVERY operation
    whether success or failure
 */


    /**
     * So if you're learning "How can I run independent API calls in parallel?", start with Promise.all().

If you're learning "How can I run independent operations in parallel and collect both successes and failures?", use Promise.allSettled().
     */