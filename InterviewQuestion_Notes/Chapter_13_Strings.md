# Chapter_13_Strings - JavaScript Concept Analysis

## Summary

This note summarizes the JavaScript files in Chapter_13_Strings on 2026-08-08T04:16:44.821Z.
Files analyzed: 3

## 109_Strings.js

### File

- Chapter_13_Strings/109_Strings.js

### Core concept

- Creating and converting strings

### Key learnings

- JavaScript strings can be declared with single quotes, double quotes, or template literals.
- Template literals support expressions inside ${} and can span multiple lines.
- String() can coerce values like numbers, booleans, and arrays into string form.

### Interview-style note

- Template literals are often preferred over manual string concatenation because they are more readable and support expressions.

## 110_String_Functions.js

### File

- Chapter_13_Strings/110_String_Functions.js

### Core concept

- Accessing characters and string properties

### Key learnings

- String length is zero-based for indexing, but the length property counts characters.
- charAt() returns a character at a given index, while charCodeAt() returns its ASCII code.
- The at() method supports negative indices, which makes it easier to access characters from the end.

### Interview-style note

- A strong interview answer is to remember that string indexing is zero-based, while length counts characters from 1 onward.

## 111_String_Searching.js

### File

- Chapter_13_Strings/111_String_Searching.js

### Core concept

- Searching strings with built-in methods

### Key learnings

- includes() checks whether a substring exists inside a string.
- startsWith() and endsWith() are useful for validating prefixes and suffixes.
- indexOf() and lastIndexOf() return the match position, or -1 when no match exists.

### Interview-style note

- A common interview gotcha is that indexOf() returns -1 when the substring is missing, so always check for that value.
