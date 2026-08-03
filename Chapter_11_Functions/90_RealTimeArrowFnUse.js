function validateStatusCode(status)
{
    if(status>=200 && status<300) 
    {
        console.log("Basic Function Success");
    }
}

const validateStatusCodeExp=function(status)
{
    if (status>=200 && status<300)
    {
        console.log("Expression Function Success");
    }
}

const validateStatusCodeArrow=(status)=>
{
    if(status>=200 && status<300)
    {
        console.log("Arrow Function Success")
    }
}
validateStatusCode(200);//Basic Function Success will be printed on console because the function validateStatusCode() returns "Basic Function Success" to the caller.
validateStatusCodeExp(200);//Expression Function Success will be printed on console because the function validateStatusCodeExp() returns "Expression Function Success" to the caller.
validateStatusCodeArrow(200);//Arrow Function Success will be printed on console because the function validateStatusCodeArrow() returns "Arrow Function Success" to the caller.