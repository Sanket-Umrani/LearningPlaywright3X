console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2 : API response received!")
}, 5000);

console.log("Test 3: Moving to next last");

/**
 * The actual output is:

Test 1: started
Test 3: Moving to next last
(wait 5 seconds)
Test 2 : API response received!
 */
/**
 * Step by step

1. First line executes immediately

console.log("Test 1: started");

Output:

Test 1: started

2. JavaScript reaches setTimeout()

setTimeout(function () {
    console.log("Test 2 : API response received!")
}, 5000);

Here you're basically telling JavaScript:

"Wait 5 seconds, then execute this function."

The function:

function () {
    console.log("Test 2 : API response received!")
}

is a callback.

setTimeout() receives that callback and schedules it to run later.

It does not stop JavaScript from continuing.

3. JavaScript immediately moves to the next line

console.log("Test 3: Moving to next last");

So we get:

Test 3: Moving to next last

4. After approximately 5 seconds

The callback is executed:

function () {
    console.log("Test 2 : API response received!")
}

So:

Test 2 : API response received!
 * 
 */