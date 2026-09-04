let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 100ms")
    }), 100
});

let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Slow 500ms")
    }), 500
});

Promise.race([fastServer, slowServer]) //Promise.race() returns the result of whichever Promise settles first.
.then(function (winner) {
    console.log("Winner:", winner);
})

/**
 * Promise.race()
                  │
          ┌───────┴───────┐
          ↓               ↓
    fastServer       slowServer
       100ms             500ms
          ↓               ↓
      🏆 FIRST          too late
          │
          ↓
    "Fast 100ms"
 */

    /**
     * Promise.race() doesn't cancel the slower Promise.

The race is already settled when the 100ms Promise finishes.

Conceptually:

0ms
│
├── fastServer starts
│
└── slowServer starts
     
100ms
│
└── fastServer resolves 🏆
          ↓
       .then()
          ↓
    "Fast 100ms"

500ms
│
└── slowServer resolves
    but race has already settled

So slowServer can still finish in the background, but its result is no longer used by this Promise.race().
     */

/**
 * Promise.all()
    → ALL

Promise.allSettled()
    → EVERYONE, success or failure

Promise.race()
    → FIRST ONE
 */