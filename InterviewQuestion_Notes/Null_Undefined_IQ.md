# JavaScript `null` vs `undefined`

## Comparison Table

| Aspect | `null` | `undefined` |
|---|---|---|
| What it means | Explicit absence of any value | Variable declared but not assigned, or missing property/function return |
| Type | `object` (JavaScript quirk) | `undefined` |
| Assigned by | Developer intentionally | JavaScript engine automatically |
| Typical use case | Placeholder for "no value" or empty object reference | Uninitialized variable, missing argument, absent return value |
| Equality | `null == undefined` is true, `null === undefined` is false | `undefined == null` is true, `undefined === null` is false |
| JSON representation | `null` is valid JSON | `undefined` is not valid JSON; dropped in serialization |
| Example value | `let value = null;` | `let value; // undefined` |

## Simple Example Walkthrough

File: `null-undefined-example.js`

```js
let a;               // a is declared but not assigned
let b = null;        // b is explicitly set to no value

console.log(a);      // undefined
console.log(b);      // null

function greet(name) {
  if (name === undefined) {
    return 'Hello, guest!';
  }
  return `Hello, ${name}!`;
}

console.log(greet());          // Hello, guest!
console.log(greet('Sanket'));  // Hello, Sanket!

const config = {
  theme: null,
  layout: 'grid',
};

console.log(config.header);    // undefined because header does not exist
```

### What the example shows

- `a` is declared without a value, so it becomes `undefined`.
- `b` is explicitly assigned `null`, signaling intentional absence.
- A missing function argument is `undefined` inside the function.
- Accessing a missing object property returns `undefined`, not `null`.

## Pipeline Diagram

Source Code -> Runtime initialization -> Variable binding -> Value assignment -> Evaluation

- Source Code: `null-undefined-example.js`
- Runtime initialization: JavaScript engine creates bindings for declarations
- Variable binding: `a` exists, but no value yet -> `undefined`
- Value assignment: `b` is intentionally set to `null`
- Evaluation: expressions and comparisons use `null` and `undefined` semantics

## Why the distinction matters

- Use `undefined` for uninitialized variables and absent values that the engine determines.
- Use `null` when you want to explicitly indicate "no value".
- `null` and `undefined` are similar in loose equality but different in strict equality and meaning.

## TL;DR

`undefined` means a variable exists but has not been assigned a value or a property is missing. `null` is an intentional assignment that means "no value." Prefer explicit `null` for empty placeholders and expect `undefined` from missing values and uninitialized variables.