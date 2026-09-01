let day=2;
//1=>mon 2=> tue 3=>wed 4=>thu 5=>fri 6=>sat 7=>sun
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;  
        default: console.log("No Idea which day it is");
                        
}
/**
 * -switch compares the value against each case
   -break stops the switch once a match is handled
   -default runs when no case matches (like the final else)
   -switch uses strict comparison (===) to match cases
   -If you forget break, JavaScript keeps running the next cases too, even though they did not match. This is called fall-through.
   -switch is a clean replacement for a long if / else if chain on one value
   -break stops it, without break it falls through to the next cases
   -default is the fallback for unmatched values
   -Group cases to share logic, use switch (true) for ranges
   -Matching is strict (===), so type matters



 */