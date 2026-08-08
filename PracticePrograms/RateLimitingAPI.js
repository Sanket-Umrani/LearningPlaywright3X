function makeRateLimiter(limit) {
    let calls = 0;

    return function () {
        if (calls >= limit) {
            console.log("Rate limit exceeded!");
            return false;
        }

        calls++;
        console.log(`Request ${calls} allowed`);
        return true;
    };
}

const limiter = makeRateLimiter(3);

limiter(); // Request 1 allowed
limiter(); // Request 2 allowed
limiter(); // Request 3 allowed
limiter(); // Rate limit exceeded!