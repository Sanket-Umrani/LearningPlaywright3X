let getToken = Promise.resolve("ABC123");

let gT=function getToken() {
    return Promise.resolve("ABC123");
}
let gU=function getUser(token) {
    return Promise.resolve({ name: "Pramod" });
}
//Promise Chaining Version:
getToken.then(function (token) {
    return gU(token); //The value returned by getUser(token) eventually becomes the user parameter of the next .then().
}).then(function (user) {
    console.log(user);
});




//async/await version
async function run(){
    let token = await gT();
    //Call getToken(), wait for its Promise to resolve, then put the result into token
    /**
     * getToken()
    ↓
Promise
    ↓
await
    ↓
"ABC123"
    ↓
token = "ABC123"
     */
    
    
    let user = await gU(token);
    /**
     * getUser("ABC123")
       ↓
    Promise
       ↓
     await
       ↓
 { name: "Pramod" }
       ↓
user = { name: "Pramod" }
     */
    console.log(user);
    
}
run();
//The first output comes from Promise chaining, and the second comes from async/await.

/**
 * 
 * getToken vs getToken()
 * 
 * If getToken is a Promise variable, then  this getToken.then(...) can be valid:
 * But if getToken is a function that returns a Promise, you need: getToken().then(...)
 * await getToken() means you're calling the function and waiting for its returned Promise.
 */
