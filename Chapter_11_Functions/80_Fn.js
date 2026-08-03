//Without Functions repeated code
let score1=85;
let result1=score1>=70? "Pass":"Fail";
console.log(result1);

let score2=45;
let result2=score2>=70? "Pass":"Fail";
console.log(result2);

//With Functions no repeated code
function getResult(score)
{
    return score>=70? "Pass":"Fail";
    }
    getResult(85);
    console.log(getResult(85));
    getResult(45);
    console.log(getResult(45));