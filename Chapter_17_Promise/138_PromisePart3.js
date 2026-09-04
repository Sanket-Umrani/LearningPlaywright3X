
let apiCall = new Promise(async function (resolve, reject) {
    // I will make call...
    reject("500 Error");
});

apiCall.then(function (data) {
    console.log("Data is success!!")
}).catch(function (error) {
    console.log(error)
});


// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped.

/**
 * API CALL
                    │
                    ↓
                Promise
                    │
             ┌──────┴──────┐
             ↓             ↓
        resolve()       reject()
          SUCCESS          ERROR
             │              │
             ↓              ↓
          .then()        .catch()
             │              │
             ↓              ↓
       success code      error code
 */


       /** Complete Flow of Promise with .then() and .catch()
        * new Promise()
                      │
                      ↓
               reject("500 Error")
                      │
                      ↓
              ┌───────────────┐
              │ Promise ❌     │
              │ REJECTED      │
              │               │
              │ "500 Error"   │
              └───────┬───────┘
                      │
                      ↓
                  .then()
                      │
                   SKIPPED ❌
                      │
                      ↓
                  .catch()
                      │
                      ↓
             error = "500 Error"
                      │
                      ↓
              console.log(error)
                      │
                      ↓
                 500 Error
        */