function getStatus(code)
{
    if(code>=200 && code<300)
    {
        return "Success";
    }
    else if(code>=400 && code<500)
    {
        return "Client Error";
    }
    else if(code>=500 && code<600)
    {
        return "Server Error";
    }
    else
    {
        return "Unknown Error";
    }
}
getStatus(200);
getStatus(404);
getStatus(500);
console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));

//Returns Nothing ->undefined
function logTestName(name)
{
    console.log(`Running:${name}`);
    //no reurn statement
}
logTestName("Sample Test");
function aaa()
{
    return [1,2,3,4,5,6];
    /// return {"name : pramod"}; - object
}
console.log(aaa());