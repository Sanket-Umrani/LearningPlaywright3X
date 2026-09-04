function calculate(a, b, operation) {
    return operation(a, b);
    //Take the function I received in operation, execute it, give it a and b, and return its result
}

let sum = calculate(10, 5, function (x, y) {
    return x + y;
});
// here callback is function (x, y) { return x + y;} relating with operation parameter of calculate function. 
// So when we call operation(a,b) inside calculate function, it will call the callback function and return the sum of a and b.
console.log(sum);