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