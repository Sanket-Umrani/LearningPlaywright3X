// An async function always returns a promise.
// await reads the resolved value inside another async function.
//Because await means:"Pause this async function until the Promise settles, but don't block the JavaScript runtime."

////This function always gives back a Promise, so get TestResults() is a Promise
async function getTestResults()
{
    return "Pass";
}



getTestResults().then(function(results)
{
console.log(results);
});

async function runTest()
{
    let result=await Promise.resolve("Test Passed"); //Because await means:"Pause this async function until the Promise settles, but don't block the JavaScript runtime."
    console.log(result);

    let result2=await Promise.resolve("Dashboard Test Passed");
    console.log(result2);
}
runTest();

/**
 * the async keyword automatically wraps that value in a fulfilled Promise.
 * getTestResults()
       ↓
Promise
       ↓
fulfilled
       ↓
"Pass"

So this:

getTestResults().then(function(results)
{
    console.log(results);
});

means:

getTestResults()
       ↓
Promise resolves
       ↓
"Pass"
       ↓
.then(function(results)
       ↓
results = "Pass"
       ↓
console.log(results)

Promise.resolve("Test Passed")
          ↓
        await
          ↓
     "Test Passed"
          ↓
result = "Test Passed"
 */