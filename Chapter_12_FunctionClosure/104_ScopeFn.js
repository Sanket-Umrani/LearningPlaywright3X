// //Scope in Function
// let env="Staging"; //global scope

// function setupConfig(){
//     let timeout=3000; //local scope
//     console.log(env);//can access global
//     console.log(timeout);//can access local

// }
// setupConfig();
// console.log(env);
// //console.log(timeout); //Reference Error Not Accesssible outside 
//-----
let g_x=10;

function outer(){
    let x=10;
    function inner(){
        let y=20;
        console.log(x); //inner can access outer variables
    }
    inner();
    console.log(y); //outer cannot access inner variables
}
outer(); //this needs to be called if inner() needs to be executed
//inner(); //reference error