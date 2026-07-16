let temp=35;
let feel= (temp>=40) ? "Very Hot": (temp>=30) ? "Hot" : (temp>=20) ? "Pleasant" : (temp>=10) ? "Cool" : "Cold";
console.log(`The temperature is ${temp}°C and it feels: ${feel}`);