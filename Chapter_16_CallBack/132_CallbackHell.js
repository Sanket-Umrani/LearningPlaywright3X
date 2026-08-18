// Real QA Scenario: E2E Login Flow app.vwo.com

function openBrowser(callback){ //here callback refers to the function
    console.log("opening the browser");
    setTimeout(function () {
        console.log("Step 1 - browser starting...");
        callback(); //here callback() executes the function
    }, 500);
}

function goToLoginPage(callback) {//here callback refers to the function
    setTimeout(function () {
        console.log("Step 2: Login page loaded");
        callback();//here callback() executes the function
    }, 500);
}

function enterCredentials(callback) {//here callback refers to the function
    setTimeout(function () {
        console.log("Step 3: Credentials entered");
        callback();//here callback() executes the function
    }, 500);
}

function clickLogin(callback) {//here callback refers to the function
    setTimeout(function () {
        console.log("Step 4: Login button clicked");
        callback();//here callback() executes the function
    }, 500);
}

// // THIS IS CALLBACK HELL 👇
openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test is Complete!")
            })
        })
    })
})