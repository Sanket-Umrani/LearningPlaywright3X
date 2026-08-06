function startBrowser(){
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
    return installBrowser();
    
}
//console.log(fail); //Reference Error
//installBrowser();//Reference Error
const runTc=startBrowser();
runTc(); //Type Error 
