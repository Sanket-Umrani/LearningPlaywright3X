let testResults = ["PASS", "FAIL", "PASS", "SKIP"];

testResults.forEach(function(result, index){
            console.log("Test " + index + " -> " + result)
});
//Using Arrow Functions
// testResults.forEach((results,index)=>{
//     console.log("Test " + index + " -> " + results);
// })

// "All done" prints LAST because forEach is synchronous — it finishes all 4 iterations first, then moves on.

/**
 * // forEach does something like this internally

function forEach(callback) {
    callback("PASS", 0);
    callback("FAIL", 1);
    callback("PASS", 2);
    callback("SKIP", 3);
}

So you provide the function, and forEach() calls that function for every array element.
 */