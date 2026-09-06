// Error Handling — try/catch
// With Promises you use .then and  .catch().
// With async/await you use try/catch — exactly like regular JavaScript error handling.

async function testAPI(){
try {
    {
        let result = await Promise.reject("503 Service Unavailable");
        console.log("Result is : ", result);
    }
} catch (error) {
    console.log("Error is : ", error);
    
}
finally {
    console.log("Clean Up code is executed here");
}}

testAPI();

function step1()
{
    console.log("1");
}
function step2()
{
    console.log("2");
}

step1();
step2();