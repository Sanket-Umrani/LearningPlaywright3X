# JavaScript `var`, `let`, and `const`

## Comparison Table

| Aspect | `var` | `let` | `const` |
|---|---|---|---|
| Declaration type | Function-scoped or globally scoped | Block-scoped | Block-scoped |
| Reassignment | Allowed | Allowed | Not allowed (binding immutable) |
| Redeclaration | Allowed in same scope | Not allowed in same scope | Not allowed in same scope |
| Hoisting | Yes — declaration hoisted, initialization stays in place | Yes — declaration hoisted, but access before initialization throws | Yes — declaration hoisted, but access before initialization throws |
| Temporal Dead Zone | No | Yes | Yes |
| Typical use case | Legacy code, function-level variables | Most local variables, loop counters | Constants, fixed references |
| Example file ext. | `.js` | `.js` | `.js` |

## Simple Example Walkthrough

File: `var-let-const-example.js`

```js
function example() {
  console.log(a); // undefined — `var` is hoisted
  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  // console.log(c); // ReferenceError: Cannot access 'c' before initialization

  var a = 1;
  let b = 2;
  const c = 3;

  if (true) {
    var a = 10;   // same function-scoped variable as outer `a`
    let b = 20;   // new block-scoped variable
    const c = 30; // new block-scoped constant

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
  }

  console.log(a); // 10
  console.log(b); // 2
  console.log(c); // 3

  b = 22;          // allowed
  // c = 33;      // TypeError: Assignment to constant variable.
}

example();
```

### What the example shows

- `var a` is function-scoped, so the inner `var a` overwrites the outer one.
- `let b` is block-scoped, so the `b` inside `if` is a different variable.
- `const c` is also block-scoped and cannot be reassigned.
- Accessing `b` or `c` before their declaration triggers the temporal dead zone.

## Pipeline Diagram

Source code -> Parser -> Scope analysis -> Variable bindings

- Source code: `var-let-const-example.js`
- Parser: reads the declarations and statements
- Scope analysis: determines function- vs block-scoped bindings
- Variable bindings: sets `var` in function/global scope, `let`/`const` in block scope

## Why the differences matter

- `var` can cause unexpected behavior because it ignores block boundaries and hoists silently.
- `let` is safer for ordinary variables because it respects block scope and prevents redeclaration.
- `const` expresses intent clearly: the binding should not change after initialization.

## TL;DR

Use `let` for most variables and `const` for values that should not be reassigned. Avoid `var` in modern JavaScript unless you need legacy function-scoped behavior. `var` hoists differently and is function-scoped; `let` and `const` are block-scoped and use the temporal dead zone before initialization.