# Finding the Maximum Value in an Array

## What this concept means

When you have a list of numbers, you may want to know which one is the biggest. This is called finding the maximum value.

Think of it like this:
- You have several scores in a game.
- You want to know the highest score.
- The same idea works for numbers in an array.

## Why it is useful

This concept is used in many real-life situations:
- Finding the highest mark in a class
- Showing the biggest price in a product list
- Comparing temperatures from different days
- Choosing the largest value in a dataset

## Simple idea

To find the maximum value:
1. Assume the first number is the biggest.
2. Compare it with the next number.
3. If the next number is bigger, replace the current biggest.
4. Keep doing this until all numbers are checked.

## JavaScript example

```javascript
const arr = [4, 10, 5, 8, 3];

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);
```

## Step-by-step explanation

- `let max = arr[0]` means we start by assuming the first element is the maximum.
- The loop begins from index `1` because the first element is already considered.
- Each time the code checks if a new value is larger than `max`.
- If it is larger, `max` is updated.
- At the end, `max` contains the biggest value.

## Easy way to remember it

The program keeps asking:
> “Is this number bigger than the biggest one I have seen so far?”

If the answer is yes, it remembers the new bigger number.

## Final takeaway

Finding the maximum value in an array means checking each number carefully and keeping track of the largest one seen so far.
