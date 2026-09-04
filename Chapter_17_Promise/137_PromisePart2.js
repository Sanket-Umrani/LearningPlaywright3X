let apiCall = new Promise(function(resolve, reject){
        resolve({status : 200, body : "User Data"});
});

apiCall.then(function(response){
    console.log(response);
    console.log(response.status);
    console.log(response.body);
});

// .then() runs ONLY when the promise resolves successfully.

/**
 * Step By Step Explanation:
1. We create a new Promise called apiCall 
let apiCall = new Promise(...) 
Inside the Promise, we immediately call resolve with an object that has a status and body.
2. We then call .then() on the apiCall Promise. The function we pass to .then() will be executed when the Promise resolves successfully.
3. Inside the .then() function, we log the entire response object, and then log the status and body properties of that object.
 */

/**
 * resolve(value) → .then(value)
 *  new Promise()
            │
            ↓
       resolve(object)
            │
            ↓
      Promise fulfilled ✅
            │
            ↓
        .then()
            │
            ↓
    function(response)
            │
            ↓
response = resolved object
            │
       ┌────┴────┐
       ↓         ↓
 response.status  response.body
       ↓         ↓
      200     "User Data"
 */