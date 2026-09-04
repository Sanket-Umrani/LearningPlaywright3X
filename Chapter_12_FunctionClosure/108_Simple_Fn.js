function makeRateLimiter(limit) {

    let call = 0;
    function check() {
        call++;
        return call <= limit;
    }
    return check; // Give the check function to the caller, It does not execute check.

}

let limiter = makeRateLimiter(3); //limiter is a caller
console.log(limiter()); //Each limiter calls the function that was returned, in this case is check() function, which is a closure that remembers the value of call variable.;
console.log(limiter());
console.log(limiter());
console.log(limiter());

/**
 * return check     → return function
return check()   → call function, return its result
 */
//limiter is a variable/reference holding the check function, and limiter() calls that function.