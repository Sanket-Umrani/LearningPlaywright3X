# LearnPlaywright3x

JavaScript Fundamentals & Automation Learning Repo

A learning repository tracking JavaScript fundamentals from first principles, alongside RICE-prompt notes for automation framework generation and a growing IQ_Notes reference library (interview-style concept explainers).

## Table of Contents

- [Repo Structure](#repo-structure)
- [Chapter 01 — Hello World](#chapter-01--hello-world)
- [Chapter 02 — let & Scope](#chapter-02--let--scope)
- [Chapter 03 — Identifiers & Comments](#chapter-03--identifiers--comments)
- [Chapter 04 — Literals & Numbers](#chapter-04--literals--numbers)
- [Chapter 05 — Operators](#chapter-05--operators)
- [IQ_Notes — Reference Library](#iq_notes--reference-library)
- [Utilities & Prompts](#utilities--prompts)

---

## Repo Structure

```
LearnPlaywright3x/
├── Chapter_01_Basics/
│   └── 01_HelloWorld.js                          # console.log basics ("Hello Sanket")
├── Chapter_02_JavaScriptBasics/
│   └── 02_let_concept.js                         # let scoping, hoisting, function declarations
├── Chapter_03_Identifier/
│   ├── 03_IdentifierRules.js                     # valid/invalid identifier characters
│   ├── 04_IdentifierRules-Part2.js               # naming conventions (camelCase, PascalCase, etc.)
│   ├── 05_Comments.js                            # single-line, multi-line, JSDoc comments
│   └── 06_Identifier_InterviewQuestions.js       # identifier edge cases, Unicode, keywords
├── Chapter_04_Literals/
│   ├── 07_Literals.js                            # literal types + typeof
│   ├── 08_Null_Undefined.js                      # null vs undefined deep dive
│   ├── 09_Null_InterviewQuestion.js              # null literal one-liner
│   ├── 10_Literals.js                            # number literal formats (hex, octal, exponent)
│   ├── 11_NumberPart1.js                         # integer/float/binary/octal/hex literals
│   └── 12_NumberPart2.js                         # numeric separators, BigInt, Infinity, NaN
├── Chapter_05_Operators/
│   ├── 13_DataType.js                            # data types overview (string, number, boolean, etc.)
│   ├── 14_AssignmentOperators.js                 # assignment operators (=, +=, -=)
│   ├── 15_Arithmatic_Operators.js                # arithmetic operators (+, -, *, /)
│   ├── 16_Comparison_Operators.js                # comparison operators (== vs ===)
│   ├── 17_Logical_Operators.js                   # logical operators (&&, ||, !)
│   ├── 18_ConfusingComparisons_P1.js             # type coercion: == vs === edge cases
│   ├── 18_ConfusingComparisons_P2.js             # null/undefined coercion gotchas
│   ├── 19_Questions.js                           # loose vs strict equality practice
│   ├── 20_String_Operator.js                     # string concatenation with +
│   ├── 21_Ternary_Operator.js                    # ternary conditional operator basics
│   ├── 22_InterviewQuestions.js                  # status code ternary example
│   ├── 23_InterviewQuestions.js                  # environment-based URL ternary
│   ├── 24_InterviewQuestions.js                  # CI/browser mode ternary
│   ├── 25_InterviewQuestions.js                  # SLA response time ternary
│   ├── 26_InterviewQuestions.js                  # gender condition ternary
│   ├── 27_NestedTernaryOperator.js               # nested ternary for traveler logic
│   ├── 28_InterviewQuestions.js                  # HTTP status category nested ternary
│   ├── 29_InterviewQuestions.js                  # temperature feels-like nested ternary
│   └── 30_TypeOfOperators.js                     # typeof operator
├── InterviewQuestion_Notes/
│   ├── Equality_Operators_IQ.md                  # == vs === deep dive
│   ├── Identifier_vs_Literal_IQ.md               # identifier vs literal distinction
│   ├── JavaScriptEngine_V8_IQ.md                 # V8 engine architecture
│   ├── Null_Undefined_IQ.md                      # null vs undefined reference
│   ├── Source_Code_Binary_Bytecode_IQ.md         # source vs bytecode vs machine code
│   ├── Var_Const_Let_IQ.md                       # var vs let vs const comparison
│   └── *.png                                     # rendered diagrams for each IQ note
├── Utilities&Prompts/
│   ├── ConceptsPromptsSample                     # sample prompts for concept generation
│   ├── ConceptualExplanationPrompts              # prompts for conceptual explanations
│   ├── MarkDowntoPNGConversion                   # instructions for MD table → PNG
│   └── render_md_table_to_png.py                 # Python script: markdown table → PNG image
└── README.md                                     # this file
```

---

## Chapter 01 — Hello World

**Concept:** The smallest possible JS program — printing to the console.

**Why:** Establishes the run loop (`node file.js` → V8 → stdout) before anything else.

**Q&A — why use this?**

- **Q:** What runs this file? **A:** Node.js, powered by the V8 engine.
- **Q:** Where does `console.log` write to? **A:** stdout, via V8's console binding.
- **Q:** Why start here? **A:** Confirms the toolchain (Node install, file execution) works before adding logic.

```js
console.log("Hello Sanket");
```

---

## Chapter 02 — let & Scope

**Concept:** `let` is block-scoped, unlike `var` which is function-scoped. This file also shows hoisting behavior for function declarations.

**Why:** Understanding block scope is required before writing loops or conditionals safely — `var` in a loop leaks past the block, `let` doesn't.

**Q&A — why use this?**

- **Q:** Why does `badCodeFn()` work even though it's called before its declaration? **A:** Function declarations are hoisted fully (name + body) to the top of their scope.
- **Q:** What would break if `let a` inside the `for` were `var a`? **A:** Nothing here directly, but `var` would leak `a` out of the loop's block scope into the enclosing scope.
- **Q:** Why is this file called "bad code"? **A:** A 100,000-iteration `console.log` + function call per tick is a deliberate anti-pattern for demonstrating performance cost, not a real-world pattern.

```js
let a = 10;
console.log(a);

for (let a = 0; a < 100000; a++) {
    console.log(a);
    badCodeFn();
}

function badCodeFn() {
    console.log("Hello");
}
```

---

## Chapter 03 — Identifiers & Comments

**Concept:** Covers legal identifier characters, naming conventions, comment syntax, and edge cases like Unicode identifiers and reserved keywords.

**Why:** Naming rules are enforced by the parser before your code ever runs — knowing the boundaries avoids `SyntaxError`s and keeps code readable across a team.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_03_Identifier -->
| # | File | Covers |
|---|------|--------|
| 03 | `03_IdentifierRules.js` | var 45 = 34; |
| 04 | `04_IdentifierRules-Part2.js` | Naming Conventions (Cases) |
| 05 | `05_Comments.js` | This is sinle comment this will be ignore |
| 06 | `06_Identifier_InterviewQuestions.js` | JavaScript Identifier Rules - IQ |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** Can an identifier start with a digit? **A:** No — `let 1stPlace` throws `SyntaxError: Invalid or unexpected token`.
- **Q:** Can Unicode be used in identifiers? **A:** Yes — `let café` and `let 变量` are both valid; so are `\uXXXX` escape sequences.
- **Q:** What's the difference between `/* */` and `/** */` comments? **A:** Both are multi-line block comments to the engine; `/** */` is the JSDoc convention used by tooling (IDEs, doc generators) to extract structured documentation.

Full identifier rules + naming convention tables live in `InterviewQuestion_Notes/`.

---

## Chapter 04 — Literals & Numbers

**Concept:** A literal is a fixed value written directly in source code (`42`, `"hi"`, `true`, `null`). This chapter covers every literal type, `typeof` behavior, `null` vs `undefined`, and every JS number format (decimal, binary, octal, hex, exponential, separators, BigInt, Infinity/NaN).

**Why:** JS has exactly one number type (IEEE 754 double) for everything except BigInt — no `int`/`float`/`double` split like Java or C. Knowing the literal forms and quirks (`typeof null === "object"`, `NaN !== NaN`) prevents subtle bugs.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_04_Literals -->
| # | File | Covers |
|---|------|--------|
| 07 | `07_Literals.js` | Numric Literal - Numeric |
| 08 | `08_Null_Undefined.js` | null vs undefined in JavaScript |
| 09 | `09_Null_InterviewQuestion.js` | let no_audi_pramod_sir_has = null |
| 10 | `10_Literals.js` | typeof operator |
| 11 | `11_NumberPart1.js` | All Number Types in JavaScript |
| 12 | `12_NumberPart2.js` | let million = 1_000_000 |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** Can an identifier start with a digit? **A:** No — `let 1stPlace` throws `SyntaxError: Invalid or unexpected token`.
- **Q:** Can Unicode be used in identifiers? **A:** Yes — `let café` and `let 变量` are both valid; so are `\uXXXX` escape sequences.
- **Q:** What's the difference between `/* */` and `/** */` comments? **A:** Both are multi-line block comments to the engine; `/** */` is the JSDoc convention used by tooling (IDEs, doc generators) to extract structured documentation.

Full identifier rules + naming convention tables live in `InterviewQuestion_Notes/`.

---

## Chapter 04 — Literals & Numbers

**Concept:** A literal is a fixed value written directly in source code (`42`, `"hi"`, `true`, `null`). This chapter covers every literal type, `typeof` behavior, `null` vs `undefined`, and every JS number format (decimal, binary, octal, hex, exponential, separators, BigInt, Infinity/NaN).

**Why:** JS has exactly one number type (IEEE 754 double) for everything except BigInt — no `int`/`float`/`double` split like Java or C. Knowing the literal forms and quirks (`typeof null === "object"`, `NaN !== NaN`) prevents subtle bugs.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_04_Literals -->
| # | File | Covers |
|---|------|--------|
| 07 | `07_Literals.js` | Numric Literal - Numeric |
| 08 | `08_Null_Undefined.js` | null vs undefined in JavaScript |
| 09 | `09_Null_InterviewQuestion.js` | let no_audi_pramod_sir_has = null |
| 10 | `10_Literals.js` | typeof operator |
| 11 | `11_NumberPart1.js` | All Number Types in JavaScript |
| 12 | `12_NumberPart2.js` | let million = 1_000_000 |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** Can an identifier start with a digit? **A:** No — `let 1stPlace` throws `SyntaxError: Invalid or unexpected token`.
- **Q:** Can Unicode be used in identifiers? **A:** Yes — `let café` and `let 变量` are both valid; so are `\uXXXX` escape sequences.
- **Q:** What's the difference between `/* */` and `/** */` comments? **A:** Both are multi-line block comments to the engine; `/** */` is the JSDoc convention used by tooling (IDEs, doc generators) to extract structured documentation.

Full identifier rules + naming convention tables live in `InterviewQuestion_Notes/`.

---

## Chapter 04 — Literals & Numbers

**Concept:** A literal is a fixed value written directly in source code (`42`, `"hi"`, `true`, `null`). This chapter covers every literal type, `typeof` behavior, `null` vs `undefined`, and every JS number format (decimal, binary, octal, hex, exponential, separators, BigInt, Infinity/NaN).

**Why:** JS has exactly one number type (IEEE 754 double) for everything except BigInt — no `int`/`float`/`double` split like Java or C. Knowing the literal forms and quirks (`typeof null === "object"`, `NaN !== NaN`) prevents subtle bugs.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_04_Literals -->
| # | File | Covers |
|---|------|--------|
| 07 | `07_Literals.js` | String, boolean, numeric, null literals + `typeof` |
| 08 | `08_Null_Undefined.js` | `null` vs `undefined` — meaning, who sets it, `typeof`, `==`/`===` comparison |
| 09 | `09_Null_InterviewQuestion.js` | One-liner: `let no_audi_pramod_sir_has = null;` |
| 10 | `10_Literals.js` | Decimal, hex, octal, exponential number literals |
| 11 | `11_NumberPart1.js` | Integer/binary/octal/hex, floating-point, exponential notation |
| 12 | `12_NumberPart2.js` | Numeric separators (ES2021+), BigInt, Infinity, NaN |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** Why does `typeof null` return `"object"`? **A:** A long-standing JS bug from the original 1995 implementation, kept for backward compatibility.
- **Q:** What's the real difference between `null` and `undefined`? **A:** `undefined` means "not assigned yet" (JS sets it automatically); `null` means "intentionally empty" (a developer sets it explicitly).
- **Q:** When do you need BigInt? **A:** When an integer exceeds `Number.MAX_SAFE_INTEGER` (2^53 - 1) and precision matters — append `n` to the literal or call `BigInt(...)`.

---

## Chapter 05 — Operators

**Concept:** JavaScript operators — assignment, arithmetic, comparison, logical, string, ternary, and `typeof`. Includes deep dives into type coercion gotchas with `==` vs `===`.

**Why:** Operators are how programs compute, decide, and transform data. The loose equality (`==`) coercion rules are a common source of bugs — understanding them is essential before writing test assertions or conditional logic.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_05_Operators -->
| # | File | Covers |
|---|------|--------|
| 13 | `13_DataType.js` | Data Type in the JS |
| 14 | `14_AssignmentOperators.js` | Assignment Operators |
| 15 | `15_Arithmatic_Operators.js` | +,-,*, /, |
| 16 | `16_Comparison_Operators.js` | Compasion Operator (will always result in the boolean, true or false) |
| 17 | `17_Logical_Operators.js` | && -> AND Gate |
| 18 | `18_ConfusingComparisons_P1.js` | Rule of thumb: |
| 18 | `18_ConfusingComparisons_P2.js` | Rule of thumb: |
| 19 | `19_Questions.js` | console.log(5!==="5"); //this will throw an error because !=== is not a valid operator in JavaScript |
| 20 | `20_String_Operator.js` | typeof operator |
| 21 | `21_Ternary_Operator.js` | ## Ternary (Conditional) Operator |
| 22 | `22_InterviewQuestions.js` | loose vs strict equality operators (== |
| 23 | `23_InterviewQuestions.js` | loose vs strict equality operators (== |
| 24 | `24_InterviewQuestions.js` | ternary conditional operator |
| 25 | `25_InterviewQuestions.js` | Using Template Literal |
| 26 | `26_InterviewQuestions.js` | ternary conditional operator |
| 27 | `27_NestedTernaryOperator.js` | Condition 1: logic is age>18 he will go goa other wise not |
| 28 | `28_InterviewQuestions.js` | ternary conditional operator |
| 29 | `29_InterviewQuestions.js` | ternary conditional operator |
| 30 | `30_TypeOfOperators.js` | typeof true is boolean |
| — | `IncreDecreImportantQuestions.js` | let a = 100; |
| — | `PreIncreAddLiteralValue.js` | let a=10 // |
| — | `PreIncrePostIncreConcat.js` | let a=10; |
| — | `PrePostIncrement.js` | Pre Increment |
| — | `null_coalescing_operator.js` | ternary conditional operator |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** Can an identifier start with a digit? **A:** No — `let 1stPlace` throws `SyntaxError: Invalid or unexpected token`.
- **Q:** Can Unicode be used in identifiers? **A:** Yes — `let café` and `let 变量` are both valid; so are `\uXXXX` escape sequences.
- **Q:** What's the difference between `/* */` and `/** */` comments? **A:** Both are multi-line block comments to the engine; `/** */` is the JSDoc convention used by tooling (IDEs, doc generators) to extract structured documentation.

Full identifier rules + naming convention tables live in `InterviewQuestion_Notes/`.

---

## Chapter 04 — Literals & Numbers

**Concept:** A literal is a fixed value written directly in source code (`42`, `"hi"`, `true`, `null`). This chapter covers every literal type, `typeof` behavior, `null` vs `undefined`, and every JS number format (decimal, binary, octal, hex, exponential, separators, BigInt, Infinity/NaN).

**Why:** JS has exactly one number type (IEEE 754 double) for everything except BigInt — no `int`/`float`/`double` split like Java or C. Knowing the literal forms and quirks (`typeof null === "object"`, `NaN !== NaN`) prevents subtle bugs.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_04_Literals -->
| # | File | Covers |
|---|------|--------|
| 07 | `07_Literals.js` | Numric Literal - Numeric |
| 08 | `08_Null_Undefined.js` | null vs undefined in JavaScript |
| 09 | `09_Null_InterviewQuestion.js` | let no_audi_pramod_sir_has = null |
| 10 | `10_Literals.js` | typeof operator |
| 11 | `11_NumberPart1.js` | All Number Types in JavaScript |
| 12 | `12_NumberPart2.js` | let million = 1_000_000 |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** Can an identifier start with a digit? **A:** No — `let 1stPlace` throws `SyntaxError: Invalid or unexpected token`.
- **Q:** Can Unicode be used in identifiers? **A:** Yes — `let café` and `let 变量` are both valid; so are `\uXXXX` escape sequences.
- **Q:** What's the difference between `/* */` and `/** */` comments? **A:** Both are multi-line block comments to the engine; `/** */` is the JSDoc convention used by tooling (IDEs, doc generators) to extract structured documentation.

Full identifier rules + naming convention tables live in `InterviewQuestion_Notes/`.

---

## Chapter 04 — Literals & Numbers

**Concept:** A literal is a fixed value written directly in source code (`42`, `"hi"`, `true`, `null`). This chapter covers every literal type, `typeof` behavior, `null` vs `undefined`, and every JS number format (decimal, binary, octal, hex, exponential, separators, BigInt, Infinity/NaN).

**Why:** JS has exactly one number type (IEEE 754 double) for everything except BigInt — no `int`/`float`/`double` split like Java or C. Knowing the literal forms and quirks (`typeof null === "object"`, `NaN !== NaN`) prevents subtle bugs.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_04_Literals -->
| # | File | Covers |
|---|------|--------|
| 07 | `07_Literals.js` | Numric Literal - Numeric |
| 08 | `08_Null_Undefined.js` | null vs undefined in JavaScript |
| 09 | `09_Null_InterviewQuestion.js` | let no_audi_pramod_sir_has = null |
| 10 | `10_Literals.js` | typeof operator |
| 11 | `11_NumberPart1.js` | All Number Types in JavaScript |
| 12 | `12_NumberPart2.js` | let million = 1_000_000 |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** Can an identifier start with a digit? **A:** No — `let 1stPlace` throws `SyntaxError: Invalid or unexpected token`.
- **Q:** Can Unicode be used in identifiers? **A:** Yes — `let café` and `let 变量` are both valid; so are `\uXXXX` escape sequences.
- **Q:** What's the difference between `/* */` and `/** */` comments? **A:** Both are multi-line block comments to the engine; `/** */` is the JSDoc convention used by tooling (IDEs, doc generators) to extract structured documentation.

Full identifier rules + naming convention tables live in `InterviewQuestion_Notes/`.

---

## Chapter 04 — Literals & Numbers

**Concept:** A literal is a fixed value written directly in source code (`42`, `"hi"`, `true`, `null`). This chapter covers every literal type, `typeof` behavior, `null` vs `undefined`, and every JS number format (decimal, binary, octal, hex, exponential, separators, BigInt, Infinity/NaN).

**Why:** JS has exactly one number type (IEEE 754 double) for everything except BigInt — no `int`/`float`/`double` split like Java or C. Knowing the literal forms and quirks (`typeof null === "object"`, `NaN !== NaN`) prevents subtle bugs.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_04_Literals -->
| # | File | Covers |
|---|------|--------|
| 07 | `07_Literals.js` | String, boolean, numeric, null literals + `typeof` |
| 08 | `08_Null_Undefined.js` | `null` vs `undefined` — meaning, who sets it, `typeof`, `==`/`===` comparison |
| 09 | `09_Null_InterviewQuestion.js` | One-liner: `let no_audi_pramod_sir_has = null;` |
| 10 | `10_Literals.js` | Decimal, hex, octal, exponential number literals |
| 11 | `11_NumberPart1.js` | Integer/binary/octal/hex, floating-point, exponential notation |
| 12 | `12_NumberPart2.js` | Numeric separators (ES2021+), BigInt, Infinity, NaN |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** Why does `typeof null` return `"object"`? **A:** A long-standing JS bug from the original 1995 implementation, kept for backward compatibility.
- **Q:** What's the real difference between `null` and `undefined`? **A:** `undefined` means "not assigned yet" (JS sets it automatically); `null` means "intentionally empty" (a developer sets it explicitly).
- **Q:** When do you need BigInt? **A:** When an integer exceeds `Number.MAX_SAFE_INTEGER` (2^53 - 1) and precision matters — append `n` to the literal or call `BigInt(...)`.

---

## Chapter 05 — Operators

**Concept:** JavaScript operators — assignment, arithmetic, comparison, logical, string, ternary, and `typeof`. Includes deep dives into type coercion gotchas with `==` vs `===`.

**Why:** Operators are how programs compute, decide, and transform data. The loose equality (`==`) coercion rules are a common source of bugs — understanding them is essential before writing test assertions or conditional logic.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_05_Operators -->
| # | File | Covers |
|---|------|--------|
| 13 | `13_DataType.js` | Data Type in the JS |
| 14 | `14_AssignmentOperators.js` | Assignment Operators |
| 15 | `15_Arithmatic_Operators.js` | +,-,*, /, |
| 16 | `16_Comparison_Operators.js` | Compasion Operator (will always result in the boolean, true or false) |
| 17 | `17_Logical_Operators.js` | && -> AND Gate |
| 18 | `18_ConfusingComparisons_P1.js` | Rule of thumb: |
| 18 | `18_ConfusingComparisons_P2.js` | Rule of thumb: |
| 19 | `19_Questions.js` | console.log(5!==="5"); //this will throw an error because !=== is not a valid operator in JavaScript |
| 20 | `20_String_Operator.js` | typeof operator |
| 21 | `21_Ternary_Operator.js` | ## Ternary (Conditional) Operator |
| 22 | `22_InterviewQuestions.js` | loose vs strict equality operators (== |
| 23 | `23_InterviewQuestions.js` | loose vs strict equality operators (== |
| 24 | `24_InterviewQuestions.js` | ternary conditional operator |
| 25 | `25_InterviewQuestions.js` | Using Template Literal |
| 26 | `26_InterviewQuestions.js` | ternary conditional operator |
| 27 | `27_NestedTernaryOperator.js` | Condition 1: logic is age>18 he will go goa other wise not |
| 28 | `28_InterviewQuestions.js` | ternary conditional operator |
| 29 | `29_InterviewQuestions.js` | ternary conditional operator |
| 30 | `30_TypeOfOperators.js` | typeof true is boolean |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** Can an identifier start with a digit? **A:** No — `let 1stPlace` throws `SyntaxError: Invalid or unexpected token`.
- **Q:** Can Unicode be used in identifiers? **A:** Yes — `let café` and `let 变量` are both valid; so are `\uXXXX` escape sequences.
- **Q:** What's the difference between `/* */` and `/** */` comments? **A:** Both are multi-line block comments to the engine; `/** */` is the JSDoc convention used by tooling (IDEs, doc generators) to extract structured documentation.

Full identifier rules + naming convention tables live in `InterviewQuestion_Notes/`.

---

## Chapter 04 — Literals & Numbers

**Concept:** A literal is a fixed value written directly in source code (`42`, `"hi"`, `true`, `null`). This chapter covers every literal type, `typeof` behavior, `null` vs `undefined`, and every JS number format (decimal, binary, octal, hex, exponential, separators, BigInt, Infinity/NaN).

**Why:** JS has exactly one number type (IEEE 754 double) for everything except BigInt — no `int`/`float`/`double` split like Java or C. Knowing the literal forms and quirks (`typeof null === "object"`, `NaN !== NaN`) prevents subtle bugs.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_04_Literals -->
| # | File | Covers |
|---|------|--------|
| 07 | `07_Literals.js` | Numric Literal - Numeric |
| 08 | `08_Null_Undefined.js` | null vs undefined in JavaScript |
| 09 | `09_Null_InterviewQuestion.js` | let no_audi_pramod_sir_has = null |
| 10 | `10_Literals.js` | typeof operator |
| 11 | `11_NumberPart1.js` | All Number Types in JavaScript |
| 12 | `12_NumberPart2.js` | let million = 1_000_000 |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** Can an identifier start with a digit? **A:** No — `let 1stPlace` throws `SyntaxError: Invalid or unexpected token`.
- **Q:** Can Unicode be used in identifiers? **A:** Yes — `let café` and `let 变量` are both valid; so are `\uXXXX` escape sequences.
- **Q:** What's the difference between `/* */` and `/** */` comments? **A:** Both are multi-line block comments to the engine; `/** */` is the JSDoc convention used by tooling (IDEs, doc generators) to extract structured documentation.

Full identifier rules + naming convention tables live in `InterviewQuestion_Notes/`.

---

## Chapter 04 — Literals & Numbers

**Concept:** A literal is a fixed value written directly in source code (`42`, `"hi"`, `true`, `null`). This chapter covers every literal type, `typeof` behavior, `null` vs `undefined`, and every JS number format (decimal, binary, octal, hex, exponential, separators, BigInt, Infinity/NaN).

**Why:** JS has exactly one number type (IEEE 754 double) for everything except BigInt — no `int`/`float`/`double` split like Java or C. Knowing the literal forms and quirks (`typeof null === "object"`, `NaN !== NaN`) prevents subtle bugs.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_04_Literals -->
| # | File | Covers |
|---|------|--------|
| 07 | `07_Literals.js` | String, boolean, numeric, null literals + `typeof` |
| 08 | `08_Null_Undefined.js` | `null` vs `undefined` — meaning, who sets it, `typeof`, `==`/`===` comparison |
| 09 | `09_Null_InterviewQuestion.js` | One-liner: `let no_audi_pramod_sir_has = null;` |
| 10 | `10_Literals.js` | Decimal, hex, octal, exponential number literals |
| 11 | `11_NumberPart1.js` | Integer/binary/octal/hex, floating-point, exponential notation |
| 12 | `12_NumberPart2.js` | Numeric separators (ES2021+), BigInt, Infinity, NaN |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** Why does `typeof null` return `"object"`? **A:** A long-standing JS bug from the original 1995 implementation, kept for backward compatibility.
- **Q:** What's the real difference between `null` and `undefined`? **A:** `undefined` means "not assigned yet" (JS sets it automatically); `null` means "intentionally empty" (a developer sets it explicitly).
- **Q:** When do you need BigInt? **A:** When an integer exceeds `Number.MAX_SAFE_INTEGER` (2^53 - 1) and precision matters — append `n` to the literal or call `BigInt(...)`.

---

## Chapter 05 — Operators

**Concept:** JavaScript operators — assignment, arithmetic, comparison, logical, string, ternary, and `typeof`. Includes deep dives into type coercion gotchas with `==` vs `===`.

**Why:** Operators are how programs compute, decide, and transform data. The loose equality (`==`) coercion rules are a common source of bugs — understanding them is essential before writing test assertions or conditional logic.

**Files:**

<!-- AUTO_FILE_TABLE:Chapter_05_Operators -->
| # | File | Covers |
|---|------|--------|
| 13 | `13_DataType.js` | Data types: string, number, boolean, bigint, undefined, null, symbol, array, NaN |
| 14 | `14_AssignmentOperators.js` | `=`, `+=`, `-=` assignment operators |
| 15 | `15_Arithmatic_Operators.js` | `+`, `-`, `*`, `/` arithmetic |
| 16 | `16_Comparison_Operators.js` | `==` (loose) vs `===` (strict), `!=` vs `!==` |
| 17 | `17_Logical_Operators.js` | `&&` (AND), `||` (OR), `!` (NOT) |
| 18 | `18_ConfusingComparisons_P1.js` | `"" == 0` vs `"0" == 0` — transitivity broken with `==` |
| 18 | `18_ConfusingComparisons_P2.js` | `null >= 0` is `true` but `null == 0` is `false` — coercion gotchas |
| 19 | `19_Questions.js` | `5 == "5"` vs `5 === "5"` vs `!=` vs `!==` practice |
| 20 | `20_String_Operator.js` | String concatenation with `+`, `+=` |
| 21 | `21_Ternary_Operator.js` | `condition ? expr1 : expr2` — adult age check |
| 22 | `22_InterviewQuestions.js` | Ternary: status code pass/fail test assertion |
| 23 | `23_InterviewQuestions.js` | Ternary: environment-based API base URL |
| 24 | `24_InterviewQuestions.js` | Ternary: CI headless vs headed browser mode |
| 25 | `25_InterviewQuestions.js` | Ternary: SLA response time check |
| 26 | `26_InterviewQuestions.js` | Ternary: gender condition check |
| 27 | `27_NestedTernaryOperator.js` | Nested ternary: traveler permission + drinking age |
| 28 | `28_InterviewQuestions.js` | Nested ternary: HTTP status category classifier |
| 29 | `29_InterviewQuestions.js` | Nested ternary: temperature feels-like classifier |
| 30 | `30_TypeOfOperators.js` | `typeof` with string, number, boolean, undefined, null, array |
<!-- /AUTO_FILE_TABLE -->

**Q&A — why use this?**

- **Q:** When does `==` cause surprises? **A:** `"" == 0` is `true`, `"0" == 0` is `true`, but `"" == "0"` is `false` — `==` coerces before comparing, breaking transitivity.
- **Q:** Why is `null >= 0` true but `null == 0` false? **A:** `>=` coerces `null` to `0` (numeric context), but `==` has a special rule: `null` only equals `undefined` and itself.
- **Q:** Are `!=` and `!==` different? **A:** Yes — `!=` is loose inequality (coerces types), `!==` is strict inequality (no coercion). `5 != "5"` is `false`, `5 !== "5"` is `true`.

---

## IQ_Notes — Reference Library

Concept explainers, generated on demand via the prompt template — table breakdown, code walkthrough, pipeline diagram, TL;DR.

| File | Covers |
|------|--------|
| `Equality_Operators_IQ.md` | `==` vs `===` — coercion rules, comparison table |
| `Identifier_vs_Literal_IQ.md` | Identifier vs literal — the fundamental distinction |
| `JavaScriptEngine_V8_IQ.md` | V8 engine architecture — parser, interpreter, JIT compiler |
| `Null_Undefined_IQ.md` | `null` vs `undefined` — usage, type checking, comparison |
| `Source_Code_Binary_Bytecode_IQ.md` | Source code → bytecode → machine code, V8 compilation pipeline |
| `Var_Const_Let_IQ.md` | `var` vs `let` vs `const` — scope, hoisting, reassignment |

Each IQ note has a corresponding `.png` diagram for visual reference.

---

## Utilities & Prompts

| File | Purpose |
|------|---------|
| `ConceptsPromptsSample` | Sample prompts for generating concept explanations |
| `ConceptualExplanationPrompts` | Prompt templates for conceptual deep-dives |
| `MarkDowntoPNGConversion` | Instructions for converting markdown tables to PNG images |
| `render_md_table_to_png.py` | Python script that renders a markdown table file into a PNG image |

---

**TL;DR:** This repo is a from-scratch JavaScript fundamentals course (console.log → scoping → identifiers → literals/numbers → operators) plus a `Utilities&Prompts` folder with automation-framework prompting and visual diagram generation tools, backed by an `IQ_Notes` library of standalone concept references anyone can regenerate with the same prompt template.
