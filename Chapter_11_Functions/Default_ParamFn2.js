function retry(testName,maxRetries=3,delay=1000)
{
    console.log(`Retrying ${testName} upto ${maxRetries} times ${delay} ms apart`)
}
retry("LoginTest");
retry("RegistrationTest",5,2000);