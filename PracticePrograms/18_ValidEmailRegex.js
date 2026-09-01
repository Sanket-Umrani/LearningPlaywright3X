const prompt=require("prompt-sync")();
let email1=String(prompt("Enter appropriate Email Id : "));
let email2=String(prompt("Enter appropriate Email Id : "));

// Function to validate an email address
function validateEmail(email) {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex pattern
    return emailPattern.test(email);
}



console.log(validateEmail(email1)); // true
console.log(validateEmail(email2)); // false