/**
 * What are we trying to build here?
 * We want an API that behaves like : 
 * Attempt 1: FAIL
 * Attempt 2: FAIL
 * Attempt 3: PASS
 * OR
 *  Attempt 1:FAIL
 * Attempt  2:FAIL
 * Attempt  3:FAIL
 * Attempt  4:FAIL
 * Attempt  5:PASS
 * 
 */
//Requirement-1
//Create a API that succeeds on Attempt 3
// I need a function that represents the api call
// let api=createFlakyAPI(3);  
//so
// api(); //behaves like api() → Attempt 1 → FAIL
// api(); //behaves like api() → Attempt 2 → FAIL
// api(); //behaves like api() → Attempt 3 → PASS

//Requirement -2
//The API needs to remember the attempt number
//Question: How will the API know if it is Attempt 1 or 2 or 3
//Solution: We need a variable
//let attempt=0;
//then everytime the api(); is called the attempt should increment
//attempt++;
//Summarize
// Initial:
// attempt = 0
//attempt++;
// First api():
// attempt = 1

// Second api():
// attempt = 2

// Third api():
// attempt = 3

// function createFlakyAPI(successattempt)
// {
//     let attempt=0;
// }

//Requirement-3
//Question: Where will be the actual API function be ?
//We want let api=createFlakyAPI(3) and then we want api();
//Solution: createFlakyAPI should return a function

function createFlakyAPI(successattempt)
{
    let attempt=0;
    return function(){};
}
/**
 * Mental Model
 * createFlakyAPI(3)
       ↓
 creates attempt = 0
       ↓
 returns function
       ↓
 api holds that function for eg let api
 This is the closure part.The returned function remembers attempt.
 */
//Requirment-4
//Question: What is the need to Increment the attempt ?
//Solution: Everytime the return API function runs, so there is a need to increment the attempt for next api call
// return function () {

//     attempt++;

// };
//Requirement -5
//Question :How can we determine when will it fail or succeed
//Solution: we have success attempts =3 and attempts =1,2,3, so cuurent attempt<success attempt then it will fail so,
// function createFlakyAPI(successattempt)
// {
//     let attempt=0;
//     return function()
//     {
//         attempt++;
//         if (attempt<successattempt)
//     {
//        //fail 
//     }
//     {
//         //pass
//     }
//     };}
    //Requirement-6
    //Question : Why does this API does not return a Promise ?
    //Solution: Every asynchronous API should return a Promise

    // if (attempt<successattempt)
    // {
    //    return Promise.reject("Attempt" + attempt + "Failed");
    // }
    // {
    //    return Promise.resolve("Attempt" + attempt + "Succeeded");
    // }
    //Requirement-7
    //Put all thoughtprocess together

//     function createFlakyAPI(successattempt)
//     {
//         let attempt=0;
//         return function()
//         {
//             attempt++;
//             if(attempt<successattempt)
//             {
// return Promise.reject("Attempt" + attempt + "Failed");
//             }
//             {
//                 return Promise.resolve("Attempt" + attempt + "Success");
//             }
//         }
//     }

    //Requirement 8: Manual Execution works fine, so we need now Retry Logic to repeatedly hit the API multiple times till it successds
//Question: What does repeat means in JavaScript
//Solution: Repeat means looping , so we need to use for...of or for each or basic for loop , and for that we need maximum number of attempts so that api will call that much amount of times

//retryTesting(apiCall,5); //Try the API atmost 5 times
// async function retryTesting(operation,maxRetries)
// {
//     for(i=1;i<=maxRetries;i++)
//     {

//     }
// }
//Call the operation  inside the loop
//let result=await operation();
//we use await because our API returns a Promise.
//Operation can fail if Promise is rejected so it has to be caught so try and catch block

// try {
//     let result=await operation();
// } catch (error) {
    
// }
// async function retryTesting(operation,maxRetries)
// {
//     for(i=1;i<=maxRetries;i++)
//     {
// try {
//     let result=await operation();
//     console.log('PASS:', result);
//             return result; //If all resolved then retutn the result
// } catch (error) {
//      console.log('FAIL:', error); // if one of them is rejected then catch the error message
//      if (i === maxRetries) {  //If all Fail then use this logic
//                 throw new Error("Test failed after " + maxRetries + " attempts");
    
// }
//     }
// }}

//The Complete Code will be as follows:

function createFlakyAPI(successattempt)
    {
        let attempt=0;
        return function()
        {
            attempt++;
            if(attempt<successattempt)
            {
return Promise.reject("Attempt" + attempt + "Failed");
            }
            {
                return Promise.resolve("Attempt" + attempt + "Success");
            }
        };
    }
    async function retryTesting(operation,maxRetries)
{
    for(let i=1;i<=maxRetries;i++)
    {
try {
    let result=await operation();
    console.log('PASS:', result);
            return result;
} catch (error) {
     console.log('FAIL:', error);
     if (i === maxRetries) {
                throw new Error("Test failed after " + maxRetries + " attempts");
    
}
    }
}}
let api=createFlakyAPI(3);

retryTesting(api, 5);
