//Immediately Invoked Function Expression (IIFE)
//They are called automatically once () is executed. 

//Normal Function Declaration and Calling
function name1() {
    console.log("Hi")
}
name1();


// IIFE
(function(){
    console.log("Anonymous Fun");
})();

(function () {
    console.log("Staging")
})();

//Arrow Crazy

(() => {
    console.log("Setup complete");
})();
