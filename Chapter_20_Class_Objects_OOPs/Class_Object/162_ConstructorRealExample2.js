class Browser{
    constructor(name)
    {
        this.name=name;
        this.isOpen=true;
        console.log(name + " launched");
    }
    startBrowser()
    {
        console.log("Starting the Browser")
    }
    closeBrowser()
    {
        console.log("Closing the Browser");
    }
}

let chrome=new Browser("Chrome");
let firefox=new Browser("Firefox");
console.log(chrome.isOpen);
chrome.closeBrowser();
chrome.startBrowser();