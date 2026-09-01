let value = "5";

switch (value) {

    case 5:

        console.log("Number 5 matched");

        break;

    case "5":

        console.log("String '5' matched");

        break;

}
//// switch uses ===, so "5" !== 5 (different types)

let status = 0;

switch (status) {

    case false:

        console.log("false matched");

        break;

    case 0:

        console.log("0 matched");

        break;

}

//Because switch uses strict ===, the string "5" does not match the number 5, and 0 does not match false.
/**
 * -	switch is a clean replacement for a long if / else if chain on one value
-	break stops it, without break it falls through to the next cases
-	default is the fallback for unmatched values
-	Group cases to share logic, use switch (true) for ranges
-	Matching is strict (===), so type matters

 */