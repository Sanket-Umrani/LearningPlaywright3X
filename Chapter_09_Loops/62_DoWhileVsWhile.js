// let a = 10;
// while (a < 10) {
//     console.log(a);
//     a++;
// }

let a = 10;
do {
    console.log(a);
    a++;
} while (a < 10);

//a while loop may run zero times, but a do...while loop always runs at least once.

/**
 * -	Loops repeat code so you do not have to
-	++ and -- change a value by 1 (pre uses the new value, post uses the old value first)
-	Use for when you know the number of rounds
-	Use while when you loop until a condition changes
-	Use do...while when the body must run at least once
-	Always update the counter, or you create an infinite loop

 */