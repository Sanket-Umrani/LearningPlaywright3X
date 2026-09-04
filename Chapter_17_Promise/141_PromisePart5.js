let checkAuth = Promise.resolve("Auth Ok");
//Create an already-successful Promise whose result is "Auth Ok"
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]) //Wait for ALL these Promises to succeed.
.then(function (results) {
    console.log("All checks:", results);
})

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); }) // This will be skipped Because one Promise rejected, Promise.all() rejects everything
    .catch(function (err) { console.log("Failed:", err); });