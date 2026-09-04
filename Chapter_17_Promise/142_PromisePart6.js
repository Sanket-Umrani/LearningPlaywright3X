Promise.allSettled([ //I don't care whether they pass or fail. Wait until ALL THREE have finished
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
})
// This is like a test report — you want results for ALL tests, not just stop at the first failure.

/**
 * Promise.all() vs Promise.allSettled()

This is the key difference to remember:

	Promise.all()	Promise.allSettled()
All succeed	.then()	.then()
One fails	❌ .catch()	✅ .then()
Waits for every Promise	Not necessarily	✅ Yes
Gives individual status	No	✅ Yes
Useful for	"Everything must pass"	"Tell me what happened to everything"
 */

/**
 * Visual memory
Promise.all()

A ✅
B ❌  ─────→ ❌ FAIL
C ✅

.catch()

Whereas:

Promise.allSettled()

A ✅ ──┐
B ❌ ──┼──→ ALL RESULTS ──→ .then()
C ✅ ──┘
 */