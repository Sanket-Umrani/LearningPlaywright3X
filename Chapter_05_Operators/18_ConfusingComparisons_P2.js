// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)

console.log(" — Confusing Comparisons in JS");

// ---------- 2. null and undefined ----------
console.log(null == undefined);   // true   → special rule in ==
console.log(null === undefined);
// false  → different types // typeof null,[] is "object" and // type of undefined is "undefined"
console.log(null==null);          //true as per Thumb Rule
console.log(null == 0);           // false  → anything except null and undefined is false
console.log(null >= 0);           // true   → >= null converts to 0 and then compares so it is true
console.log(null > 0);            // false    > null converts to 0 and then compares so it is false
console.log(null == 0 || null > 0); // false … || null==0 gives false || null>0 gives false so result is false


//              null
//               │
//       ┌───────┴────────┐
//       │                │
//      ==              > >= < <=
//       │                │
//  special rule       convert to number
//       │                │
// null == undefined    null → 0
//       ↓                ↓
//     true             compare
//      ↓ 
//      null==null
//       ↓ 
//       true
//       null== anything else except undefined and null
//        ↓ 
//        false