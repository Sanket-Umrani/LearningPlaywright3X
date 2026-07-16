let environment="staging";
let baseurl=environment==="prod" ? "https://api.example.com" : "https://staging-api.example.com";
console.log("this is a ternary operator example: ",baseurl);
