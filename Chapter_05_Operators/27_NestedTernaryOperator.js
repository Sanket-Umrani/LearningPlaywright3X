let age =26;
//Condition 1: logic is age>18 he will go goa other wise not
//Condition 2: logic is if age >25 then he can drink alcohol otherwise not
let traveller=(age>18 ? "Permitted to go Goa" : "Not Permitted to go Goa") + " and " + (age>25 ? "Can drink alcohol" : "Cannot drink alcohol");
console.log(`Traveller Status: ${traveller}`);