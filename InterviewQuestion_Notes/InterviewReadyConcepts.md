# Interview Ready Concepts

## 1. Function Basics

- A function is a reusable block of code designed to perform a task.
- Parameters are placeholders defined in the function signature, while arguments are the actual values passed when calling it.
- A function can return a value using return; otherwise it returns undefined.
- Interview-ready answer: "Functions help reduce repetition by encapsulating logic into a unit with defined input and output."

## 2. Hoisting and TDZ

- var is hoisted and initialized to undefined, so it can be accessed before assignment but with the value undefined.
- Function declarations are hoisted and can be invoked before they are defined in many cases.
- let and const are hoisted to the Temporal Dead Zone (TDZ), which means they cannot be accessed before initialization.
- Interview-ready answer: "var is function-scoped and hoisted loosely, while let and const are block-scoped and throw ReferenceError before initialization."

## 3. Scope and Closures

- Scope defines where a variable is accessible.
- Inner functions can access variables from their outer scope.
- A closure is created when an inner function retains access to variables from an outer function even after that outer function has finished executing.
- Interview-ready answer: "Closure is the ability of an inner function to remember and use the lexical environment in which it was created."

## 4. Default Parameters and Rest Parameters

- Default parameters provide fallback values when an argument is missing.
- Rest parameters collect multiple arguments into an array using ...args.
- These patterns reduce manual checks and make functions more flexible.
- Interview-ready answer: "Default parameters handle missing values gracefully, while rest parameters help functions accept an unknown number of arguments."

## 5. Arrow Functions vs Normal Functions

- Arrow functions have shorter syntax and do not create their own this; they inherit this from the surrounding scope.
- Normal functions have their own this, which is useful in object methods and constructors.
- Arrow functions are commonly used in callbacks and functional patterns.
- Interview-ready answer: "Use arrow functions for concise callbacks and lexical this; use normal functions when you need a dynamic this or function object behavior."

## 6. Template Literals

- Template literals use backticks and support embedded expressions using ${}.
- They are easier to read than manual concatenation and can span multiple lines.
- Interview-ready answer: "Template literals improve readability and make string interpolation cleaner and more maintainable."

## 7. String Searching and Extraction

- includes() checks whether a substring exists.
- startsWith() and endsWith() check beginning and ending matches.
- indexOf() and lastIndexOf() return the position of a match and return -1 when no match is found.
- slice() and substring() help extract parts of a string without changing the original.
- Interview-ready answer: "String search methods are used to validate content and locate positions, while slice and substring are used for extracting relevant text."

## 8. String Conversion and Immutability

- JavaScript strings are immutable, so methods like toUpperCase() do not modify the original string; they return a new string.
- String conversion can be done using String(), Number(), parseInt(), and parseFloat().
- Interview-ready answer: "Strings in JavaScript are immutable, so operations produce new strings rather than mutating the original value."

## 9. High-Value Interview Questions

### Q: What is the difference between var and let/const?
- var is function-scoped and hoisted with undefined.
- let and const are block-scoped and exist in the TDZ before initialization.

### Q: What is closure in JavaScript?
- A closure allows an inner function to remember and access variables from its outer lexical environment even after the outer function has returned.

### Q: Why are template literals preferred?
- They are more readable, support interpolation, and handle multi-line strings better than concatenation.

### Q: What does indexOf() return if no match is found?
- It returns -1, so code must handle that case explicitly.

### Q: Are strings mutable in JavaScript?
- No. Strings are immutable, and methods like toUpperCase() return a new value instead of changing the original.

## 10. Final Interview Summary

The strongest interview answer is: "JavaScript functions, scope, closures, hoisting, and string methods are foundational concepts. A solid understanding of lexical scope, variable lifetime, and immutability helps explain many common JavaScript interview questions."
