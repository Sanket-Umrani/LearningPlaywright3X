// Write a program that takes three sides of a triangle and classifies it as EQuilateral,Isosceles and Scalene traingle
  
const data = require('fs').readFileSync(0, 'utf8').trim();
let sides = data.split(/\s+/);

let side1 = Number(sides[0]);
let side2 = Number(sides[1]);
let side3 = Number(sides[2]);

if (side1 + side2 > side3 &&
    side1 + side3 > side2 &&
    side2 + side3 > side1) {

    if (side1 === side2 && side2 === side3) {
        console.log("Equilateral");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }

} else {
    console.log("Invalid Triangle");
}

// const data = require('fs').readFileSync(0, 'utf8'). trim();
// let sides = data.split(/\s+/);

// let side1 = Number(sides[0]);
// let side2 = Number(sides[1]);
// let side3 = Number(sides[2]);

// if (side1 + side2 > side3 &&
//     side1 + side3 > side2 &&
//     side2 + side3 > side1) {

//     if (side1 === side2 && side2 === side3) {
//         console.log("Equilateral");
//     } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//         console.log("Isosceles");
//     } else {
//         console.log("Scalene");
//     }

// } else {
//     console.log("Invalid Triangle");
// }