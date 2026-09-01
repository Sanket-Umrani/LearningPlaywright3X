var a="Sanket";
if(true)
{
    console.log(a);
    var a="temp";


}
// Temporal Dead Zone

// Global Scope
// a = "Sanket"
// Enter Block , Block Scope
//  a = TDZ (exist but not initialized)
// console.log(a);
//Inside mechanism represents in this way
/**
 * var a;  declaration is hoisted

a = "Sanket";

if (true) {
    console.log(a);
    a = "temp"; //assignment is not hoisted
}
 */