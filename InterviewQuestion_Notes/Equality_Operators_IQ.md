# JavaScript `==` vs `===`

## Overview

JavaScript has two equality operators:

- `==` checks for loose equality and performs type coercion when necessary.
- `===` checks for strict equality and requires both value and type to match.

## Comparison Table

| Aspect | `==` | `===` |
|---|---|---|
| Equality type | Loose equality | Strict equality |
| Type coercion | Yes | No |
| Typical use case | When comparing values from mixed sources and you intentionally allow coercion | When you need predictable, type-safe comparisons |
| Recommended for industry code | Use sparingly; only when coercion is explicitly desired | Prefer this in most production code |
| Example | `0 == '0'` → true | `0 === '0'` → false |

## Real-time Industry Examples

### 1. User input validation

In a form handler, browser values usually arrive as strings:

```js
const ageInput = '30';
if (ageInput == 30) {
  // loose equality would allow this to match
  processAge(Number(ageInput));
}
```

Better industry practice is:

```js
if (ageInput === '30') {
  processAge(Number(ageInput));
}
```

### 2. API payload processing

APIs may send boolean-like values as strings or numbers:

```js
const payload = { active: 'true' };
if (payload.active == true) {
  enableUser();
}
```

This is risky because `'true' == true` is false, while `'1' == true` is true. Safer code is:

```js
const active = payload.active === 'true';
if (active) {
  enableUser();
}
```

### 3. Feature flags and config values

Configuration systems often store values as strings:

```js
const featureFlag = process.env.FEATURE_X;
if (featureFlag === 'enabled') {
  enableFeatureX();
}
```

Using `===` avoids accidental matches for values like `'1'` or `'true'`.

## Thumb Rule

- Use `===` by default in production code.
- Use `==` only when you explicitly want JavaScript coercion and you understand the exact conversion rules.
- When comparing values of unknown origin, convert them to a known type first and then use `===`.

### Industry thumb rule example

```js
const value = getQueryParam('id');
if (typeof value === 'string' && value !== '') {
  const id = Number(value);
  if (!Number.isNaN(id) && id === 123) {
    // safe strict comparison
  }
}
```

## Special cases where the thumb rule is overridden

There are a few built-in situations where `==` is intentionally useful and the strict thumb rule can be relaxed.

### 1. Checking for null or undefined

If you want to accept both `null` and `undefined` as equivalent:

```js
if (value == null) {
  // true for both null and undefined
}
```

This is one of the cleanest uses of loose equality.

### 2. Legacy code or data from mixed systems

When integrating with older systems that return numeric IDs as strings, you may intentionally use `==`:

```js
if (userId == 0) {
  // handles '0' and 0
}
```
```

That said, this should be limited and clearly documented.

### 3. Comparing empty values in form fields

Sometimes developers use `==` to treat `''`, `0`, `false`, `null`, and `undefined` similarly:

```js
if (value == false) {
  // true for '', 0, false, null, undefined
}
```

This is convenient, but also dangerous. Prefer explicit checks instead.

## Special coercion gotchas to watch for

- `'' == 0` → true
- `false == '0'` → true
- `null == undefined` → true
- `[] == ''` → true
- `[] == 0` → true
- `[0] == 0` → true

These cases show why `===` is usually safer.

## TL;DR

Prefer `===` for most JavaScript comparisons because it is predictable and type-safe. Use `==` only when you intentionally want loose equality, such as treating `null` and `undefined` as equivalent or handling specific legacy/coercion cases. Always validate or normalize input before comparing if the data origin is uncertain.