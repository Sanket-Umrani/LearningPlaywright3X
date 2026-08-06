function runTest(name,status,duration)
{
    return `${name} ${status} ${duration} ms`
}
console.log(runTest("Sign-In","pass",3000));