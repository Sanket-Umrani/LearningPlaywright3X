if ([]) {

    console.log("True!")

}

// case 1

let response;

if (response) {

}

// case 2

if (response !== null) {

}



/**
 * -if ([]) prints "True!" because an empty array is truthy.
   -Case 1: response is declared but has no value, so it is undefined (falsy), and the block is skipped.
   -Case 2: response !== null is true, because undefined is not strictly equal to null, so this block would run. Watch out for this, undefined and null are different types.

 */
/**
 * -	if runs code when the condition is true
-	else if adds more conditions to check, in order
-	else is the fallback when nothing above matched
-	Empty [] and {} are truthy, while "", 0, null, undefined, and NaN are falsy

 */