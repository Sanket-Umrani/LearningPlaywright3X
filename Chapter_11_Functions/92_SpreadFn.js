function add(a,b,c){
    return a+b+c;
}
let num=[1,2,3,5];
console.log(add(...num)); //add(...num) means Take the elements inside num and pass them as separate arguments."
//add(1,2,3,5) === add(...num)
function hasError(...codes) //Take all the arguments passed to this function and collect them into an array called codes.
{
    return codes.some(c=>c>=400); //usingREST it converts (200,201,404) and (200,201,404,500) into [200,201,404] and [200,201,404,500]
}
let responseCodes=[200,201,404];
let responseCodes2=[200,201,404,500];
hasError(...responseCodes); // converts [200,201,404] in to (200,201,404)
console.log(hasError(...responseCodes)); 
hasError(...responseCodes2);//converts [200,201,404,500] in to (200,201,404,500)
console.log(hasError(...responseCodes2));

/**
 * If ... appears When calling a function then SPREAD is used to unpack all the elements from an array in to individual elements
 * if ... appears  When defining a Funtion then REST is used to pack all the individually passed elements into an array called array_name here codes
 */

// Array
// [200, 201, 404]
//        ↓
//  hasError(...)
//        ↓
//     spread
//        ↓
// 200, 201, 404
//        ↓
// rest parameter collects them eg (...codes)
//        ↓
// codes = [200, 201, 404]