# Arrays and Functions in JavaScript

## Simple idea

Arrays are used to store multiple values in one place, and JavaScript provides special built-in methods to work with them easily. These methods help us add, remove, search, transform, and summarize data.

## Common Array Functions in JavaScript

| Array Function | Description | Example | Output |
|---|---|---|---|
| push() | Adds one or more elements to the end of an array. | `const nums = [10, 20]; nums.push(30);` | `[10, 20, 30]` |
| pop() | Removes the last element from an array. | `const nums = [10, 20, 30]; nums.pop();` | `[10, 20]` |
| shift() | Removes the first element from an array. | `const nums = [10, 20, 30]; nums.shift();` | `[20, 30]` |
| unshift() | Adds one or more elements to the beginning of an array. | `const nums = [20, 30]; nums.unshift(10);` | `[10, 20, 30]` |
| concat() | Joins two or more arrays. | `const a = [1, 2]; const b = [3, 4]; a.concat(b);` | `[1, 2, 3, 4]` |
| slice() | Copies a part of an array without changing the original. | `const nums = [10, 20, 30, 40]; nums.slice(1, 3);` | `[20, 30]` |
| splice() | Adds or removes elements from an array. | `const nums = [10, 20, 30]; nums.splice(1, 1);` | `[10, 30]` |
| indexOf() | Finds the first index of a value. | `const nums = [10, 20, 30]; nums.indexOf(20);` | `1` |
| includes() | Checks whether an element exists in the array. | `const nums = [10, 20, 30]; nums.includes(40);` | `false` |
| find() | Returns the first element that matches a condition. | `const nums = [10, 20, 30]; nums.find(x => x > 15);` | `20` |
| findIndex() | Returns the index of the first matching element. | `const nums = [10, 20, 30]; nums.findIndex(x => x > 15);` | `1` |
| map() | Creates a new array by changing each element. | `const nums = [1, 2, 3]; nums.map(x => x * 2);` | `[2, 4, 6]` |
| filter() | Creates a new array with elements that pass a test. | `const nums = [1, 2, 3, 4]; nums.filter(x => x > 2);` | `[3, 4]` |
| reduce() | Reduces an array to one value using a function. | `const nums = [1, 2, 3]; nums.reduce((a, b) => a + b, 0);` | `6` |
| forEach() | Runs a function once for each array element. | `const nums = [1, 2, 3]; nums.forEach(x => console.log(x));` | `1 2 3` |
| sort() | Sorts array elements in place. | `const nums = [30, 10, 20]; nums.sort((a, b) => a - b);` | `[10, 20, 30]` |
| reverse() | Reverses the order of elements. | `const nums = [10, 20, 30]; nums.reverse();` | `[30, 20, 10]` |
| join() | Converts array elements into a string. | `const nums = [10, 20, 30]; nums.join('-');` | `'10-20-30'` |
| every() | Checks whether all elements pass a test. | `const nums = [2, 4, 6]; nums.every(x => x % 2 === 0);` | `true` |
| some() | Checks whether at least one element passes a test. | `const nums = [1, 3, 5]; nums.some(x => x % 2 === 0);` | `false` |

## Easy way to remember

- Use `push()` and `pop()` for the end of the array.
- Use `shift()` and `unshift()` for the beginning of the array.
- Use `map()`, `filter()`, and `reduce()` for transforming and summarizing data.
- Use `find()` and `findIndex()` when searching for specific values.

## Final takeaway

Array functions in JavaScript make it easier to manage data without writing too much code. Learning them helps you work with lists in a cleaner and more efficient way.
