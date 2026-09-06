// When Step 2 depends on Step 1's result,
// you MUST run them sequentially.

function apiCall(name)
{
return new Promise(function(resolve){
    setTimeout(function()
{
    resolve(name + ": 200 OK");
},1000);
});
}

async function sequentialTest()
{
    console.log("Starting of the test");
    let start=Date.now();

    let r1=await apiCall("Login");
    console.log(r1);
    let r2=await apiCall("Dashboard");
    console.log(r2);
    let r3=await apiCall("Report");
        console.log(r3);
        console.log("Time: ~" +(Date.now() -start) +"ms");
}
sequentialTest();

/**
 * await Promise
      ↓
wait for the Promise means wait keyword is used
      ↓
get its resolved value
 */
/**
 * Promise
  ↓
don't wait means no await keyword
  ↓
you get the Promise object itself like  Promise { <pending> }
 */