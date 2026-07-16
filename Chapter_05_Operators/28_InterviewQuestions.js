let statuscodes=404;
let category =statuscodes<300 ? "Success": statuscodes<400 ? "Redirection" : statuscodes<500 ? "Client Error" : "Server Error";
console.log(`The status code ${statuscodes} belongs to the category: ${category}`);