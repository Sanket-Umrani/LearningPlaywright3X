let a = 10
console.log(a)
if (true){ 
    console.log(a); //reference error because a is in TDZ as it exists in the block scope and not yet initialized
    let a = 20;
}