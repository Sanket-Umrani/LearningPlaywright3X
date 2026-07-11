# JavaScript Identifier vs Literal

## Comparison Table

| Aspect | Identifier | Literal |
|---|---|---|
| What it is | A name that refers to a value, variable, function, or property | A fixed value written directly in source code |
| Purpose | Refer to storage locations or entities in code | Represent raw values such as numbers, strings, booleans, or object literals |
| Syntax | Starts with a letter, underscore, or dollar sign; may contain letters, digits, `_`, `$` | Written as actual values like `123`, `'hello'`, `true`, `{ key: 'value' }` |
| Usage | Used on the left or right side of assignment, in expressions, and for declaration | Used directly in expressions, assignments, and function calls |
| Can be reassigned? | Yes, if the identifier refers to a `let` or `var` binding | No, the literal itself is immutable |
| Example | `const name = userName;` | `const name = 'sanket';` |

## Simple Example Walkthrough

File: `identifier-literal-example.js`

```js
const firstName = 'Sanket';   // firstName is an identifier, 'Sanket' is a string literal
let age = 30;                 // age is an identifier, 30 is a number literal
const isMember = true;        // isMember is an identifier, true is a boolean literal

const user = {
  name: firstName,            // user and name are identifiers, firstName is resolved to its value
  age: age,                   // age is an identifier referring to 30
  status: 'active',           // 'active' is a string literal
};

console.log(user);
```

### What the example shows

- `firstName`, `age`, `isMember`, and `user` are identifiers. They are names used to refer to values.
- `'Sanket'`, `30`, `true`, and `'active'` are literals. They are concrete values written directly in code.
- Identifiers can refer to literals or other computed values.
- Literals cannot change themselves, but identifiers can be reassigned to different values when they are declared with `let` or `var`.

## Pipeline Diagram

Source Code -> Tokenizer -> Syntax parser -> Semantic analysis -> Runtime binding

- Source Code: `identifier-literal-example.js`
- Tokenizer: splits identifiers and literals into tokens
- Syntax parser: builds structure where identifiers refer to values and literals become value nodes
- Semantic analysis: validates identifiers and resolves literal types
- Runtime binding: assigns values to identifiers and evaluates expressions

## Why the distinction matters

- Identifiers are the names you use to access values in code.
- Literals are the actual values you write directly into code.
- Knowing the difference helps you read code correctly and avoid confusing names with values.

## TL;DR

An identifier is a name for a variable, function, or property. A literal is a raw value written directly in source code. In `const firstName = 'Sanket';`, `firstName` is the identifier and `'Sanket'` is the literal.