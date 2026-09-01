{
    console.log(a);
    let a = 10;
}
//TDZ Flow
// Enter Block
//  ↓
// a is created ✅
// a has NO value yet ❌
//     ↓
// console.log(a)  ❌ Error (TDZ)
//     ↓
// let a = 10;
//     ↓
// a = 10 ✅
/**
 * let a;
 * console.log(a); //a is in Temporal Dead Zone 
 * a=10;
 */