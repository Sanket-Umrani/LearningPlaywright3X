# LearnPlaywright3x

JavaScript Fundamentals & Automation Learning Repo

A learning repository tracking JavaScript fundamentals from first principles, alongside interview-style notes, practice programs, and automation-related prompts.

## Table of Contents

- [Repo Structure](#repo-structure)
- [Chapter Coverage](#chapter-coverage)
- [Practice Programs](#practice-programs)
- [How to Refresh This README](#how-to-refresh-this-readme)

---

## Repo Structure

```text
LearnPlaywright3x/
├── Chapter_01_Basics/
│   ├── 01_HelloWorld.js
├── Chapter_02_JavaScriptBasics/
│   ├── 02_let_concept.js
├── Chapter_03_Identifier/
│   ├── 03_IdentifierRules.js
│   ├── 04_IdentifierRules-Part2.js
│   ├── 05_Comments.js
│   ├── 06_Identifier_InterviewQuestions.js
├── Chapter_04_Literals/
│   ├── 07_Literals.js
│   ├── 08_Null_Undefined.js
│   ├── 09_Null_InterviewQuestion.js
│   ├── 10_Literals.js
│   ├── 11_NumberPart1.js
│   ├── 12_NumberPart2.js
├── Chapter_05_Operators/
│   ├── 13_DataType.js
│   ├── 14_AssignmentOperators.js
│   ├── 15_Arithmatic_Operators.js
│   ├── 16_Comparison_Operators.js
│   ├── 17_Logical_Operators.js
│   ├── 18_ConfusingComparisons_P1.js
│   ├── 18_ConfusingComparisons_P2.js
│   ├── 19_Questions.js
│   ├── 20_String_Operator.js
│   ├── 21_Ternary_Operator.js
│   ├── 22_InterviewQuestions.js
│   ├── 23_InterviewQuestions.js
│   ├── 24_InterviewQuestions.js
│   ├── 25_InterviewQuestions.js
│   ├── 26_InterviewQuestions.js
│   ├── 27_NestedTernaryOperator.js
│   ├── 28_InterviewQuestions.js
│   ├── 29_InterviewQuestions.js
│   ├── 30_TypeOfOperators.js
│   ├── 31_PrePostIncrement.js
│   ├── 32_PreIncrePostIncreConcat.js
│   ├── 33_PreIncreAddLiteralValue.js
│   ├── 34_IncreDecreImportantQuestions.js
│   ├── 35_null_coalescing_operator.js
├── Chapter_06_IfElseStatement/
│   ├── 36_if_else_if.js
│   ├── 37_if_else.js
│   ├── 38_multiple_if_else.js
├── Chapter_07_SwitchCase/
│   ├── 39_Switch.js
│   ├── 40_SwitchInterviewQuestion.js
│   ├── 41_SwitchInterviewQuestions.js
│   ├── 42_API_UseCaseSwitch.js
│   ├── 43_SwitchGroup.js
│   ├── 44_SwitchInterviewQuestions.js
│   ├── 45_SwitchCaseInterviewuestions.js
│   ├── 46_SwitchCaseInterviewQuestions.js
│   ├── 47_SwitchCaseInterviewQuestions.js
├── Chapter_08_UserInputs/
│   ├── 48_InputFromUser.js
│   ├── 49_NodeUIInputFromUser.js
│   ├── 50_NodeJsUserInputViaPrompt.js
│   ├── 51_NodeJsUserInputWithoutPrompt.js
├── Chapter_09_Loops/
│   ├── 52_PrintStatementsWithoutLoops.js
│   ├── 53_ForLoops.js
│   ├── 54_Increment.js
│   ├── 55_ForLoops.js
│   ├── 56_ForLoops.js
│   ├── 57_While.js
│   ├── 58_While.js
│   ├── 59_While.js
│   ├── 60_WhileVsForLoop.js
│   ├── 61_DoWhile.js
│   ├── 62_DoWhileVsWhile.js
│   ├── 63_NestedForLoops.js
├── Chapter_10_Arrays/
│   ├── 64_Array.js
│   ├── 65_Arrays.js
│   ├── 66_Array_Creation.js
│   ├── 67_ArrayAccessModify.js
│   ├── 68_ArrayAddingRemove.js
│   ├── 69_Array_Real.js
│   ├── 70_ArraySearching.js
│   ├── 71_Arrays_IQ.js
│   ├── 72_Array_Iterate.js
│   ├── 73_ArraysTransform.js
│   ├── 74_Sorting.js
│   ├── 75_Slicing.js
│   ├── 76_ArrayConcat.js
│   ├── 77_ArrayChecking.js
│   ├── 78_ShallowDeepCopy.js
│   ├── 79_Destructuring.js
├── Chapter_11_Functions/
│   ├── 100_TDZ.js
│   ├── 101_IQ.js
│   ├── 102_IQ.js
│   ├── 103_IQ.js
│   ├── 80_Fn.js
│   ├── 81_Fn.js
│   ├── 82_Type1_BasicFn.js
│   ├── 83_Type2_BasicsFn.js
│   ├── 84_Type3_BasicsFn.js
│   ├── 85_Type4_BasicFn.js
│   ├── 86_TemplateLiteral.js
│   ├── 87_ExpressionFunction.js
│   ├── 88_ArrowFn.js
│   ├── 89_ArrowFn.js
│   ├── 90_RealTimeArrowFnUse.js
│   ├── 91_IIFE.js
│   ├── 92_SpreadFn.js
│   ├── 93_ReturnFn.js
│   ├── 94_VarLetConst1.js
│   ├── 94_VarLetConst2.js
│   ├── 95_Hoisting.js
│   ├── 96_VarHoisting.js
│   ├── 97_FunctionHoisting.js
│   ├── 98_LetHoisting.js
│   ├── 99_LetTDZ.js
│   ├── Default_ParamFn1.js
│   ├── Default_ParamFn2.js
│   ├── RestOfParamsFn.js
├── Chapter_12_FunctionClosure/
│   ├── 104_ScopeFn.js
│   ├── 105_Closure.js
│   ├── 106_Closure_Remembers.js
│   ├── 107_Closure_RealTimeEx.js
│   ├── 108_Simple_Fn.js
├── Chapter_13_Strings/
│   ├── 109_Strings.js
│   ├── 110_String_Functions.js
│   ├── 111_String_Searching.js
├── PracticePrograms/
│   ├── 01_HelloWorld.js
│   ├── 02_TakeInputFromUsers.js
│   ├── 03_TablePrintUsingSystemOut.js
│   ├── 04_FizzBuzz.js
│   ├── 05_FindMaximumArray.js
│   ├── 05_GradeCalculator.js
│   ├── 06_FrequencyOfArrayElement.js
│   ├── 06_LeapYearChecker.js
│   ├── 07_TriangleClassifier.js
│   ├── 08_SwapTwoNumbersWithoutThirdVariable.js
│   ├── 09_RightTriangleStarPattern.js
│   ├── 10_LeftTriangleStarPattern.js
│   ├── 11_PyramidPattern.js
│   ├── Filter_Sort_Array.js
│   ├── FindDuplicateElements.js
│   ├── RateLimitingAPI.js
├── InterviewQuestion_Notes/
├── Utilities&Prompts/
└── README.md
```

---

## Chapter Coverage

This section is generated from the current JavaScript files in the workspace. Run the refresh command below whenever new chapter files or untracked JavaScript files are added.

## Chapter 01 — Basics

### Files covered

- 01_HelloWorld.js — Basic console output example

## Chapter 02 — JavaScriptBasics

### Files covered

- 02_let_concept.js — Looping and iteration examples

## Chapter 03 — Identifier

### Files covered

- 03_IdentifierRules.js — Basic console output example
- 04_IdentifierRules-Part2.js — Looping and iteration examples
- 05_Comments.js — JavaScript practice example
- 06_Identifier_InterviewQuestions.js — Looping and iteration examples

## Chapter 04 — Literals

### Files covered

- 07_Literals.js — Basic console output example
- 08_Null_Undefined.js — Basic console output example
- 09_Null_InterviewQuestion.js — JavaScript practice example
- 10_Literals.js — Basic console output example
- 11_NumberPart1.js — Looping and iteration examples
- 12_NumberPart2.js — Looping and iteration examples

## Chapter 05 — Operators

### Files covered

- 13_DataType.js — JavaScript practice example
- 14_AssignmentOperators.js — Basic console output example
- 15_Arithmatic_Operators.js — Basic console output example
- 16_Comparison_Operators.js — Looping and iteration examples
- 17_Logical_Operators.js — Basic console output example
- 18_ConfusingComparisons_P1.js — Looping and iteration examples
- 18_ConfusingComparisons_P2.js — Looping and iteration examples
- 19_Questions.js — Looping and iteration examples
- 20_String_Operator.js — Basic console output example
- 21_Ternary_Operator.js — Basic console output example
- 22_InterviewQuestions.js — Basic console output example
- 23_InterviewQuestions.js — Basic console output example
- 24_InterviewQuestions.js — Basic console output example
- 25_InterviewQuestions.js — Basic console output example
- 26_InterviewQuestions.js — Basic console output example
- 27_NestedTernaryOperator.js — Basic console output example
- 28_InterviewQuestions.js — Basic console output example
- 29_InterviewQuestions.js — Basic console output example
- 30_TypeOfOperators.js — Basic console output example
- 31_PrePostIncrement.js — Basic console output example
- 32_PreIncrePostIncreConcat.js — Array utility and transformation examples
- 33_PreIncreAddLiteralValue.js — Basic console output example
- 34_IncreDecreImportantQuestions.js — Basic console output example
- 35_null_coalescing_operator.js — Basic console output example

## Chapter 06 — IfElseStatement

### Files covered

- 36_if_else_if.js — Conditional branching examples
- 37_if_else.js — Conditional branching examples
- 38_multiple_if_else.js — Conditional branching examples

## Chapter 07 — SwitchCase

### Files covered

- 39_Switch.js — Switch-case decision examples
- 40_SwitchInterviewQuestion.js — Switch-case decision examples
- 41_SwitchInterviewQuestions.js — Switch-case decision examples
- 42_API_UseCaseSwitch.js — Switch-case decision examples
- 43_SwitchGroup.js — Switch-case decision examples
- 44_SwitchInterviewQuestions.js — Switch-case decision examples
- 45_SwitchCaseInterviewuestions.js — Switch-case decision examples
- 46_SwitchCaseInterviewQuestions.js — Switch-case decision examples
- 47_SwitchCaseInterviewQuestions.js — Switch-case decision examples

## Chapter 08 — UserInputs

### Files covered

- 48_InputFromUser.js — Conditional branching examples
- 49_NodeUIInputFromUser.js — Conditional branching examples
- 50_NodeJsUserInputViaPrompt.js — Conditional branching examples
- 51_NodeJsUserInputWithoutPrompt.js — User input handling examples

## Chapter 09 — Loops

### Files covered

- 52_PrintStatementsWithoutLoops.js — Basic console output example
- 53_ForLoops.js — Looping and iteration examples
- 54_Increment.js — Basic console output example
- 55_ForLoops.js — Looping and iteration examples
- 56_ForLoops.js — Conditional branching examples
- 57_While.js — Looping and iteration examples
- 58_While.js — Looping and iteration examples
- 59_While.js — Looping and iteration examples
- 60_WhileVsForLoop.js — Conditional branching examples
- 61_DoWhile.js — Looping and iteration examples
- 62_DoWhileVsWhile.js — Looping and iteration examples
- 63_NestedForLoops.js — Looping and iteration examples

## Chapter 10 — Arrays

### Files covered

- 64_Array.js — Basic console output example
- 65_Arrays.js — Looping and iteration examples
- 66_Array_Creation.js — Basic console output example
- 67_ArrayAccessModify.js — Looping and iteration examples
- 68_ArrayAddingRemove.js — Basic console output example
- 69_Array_Real.js — Looping and iteration examples
- 70_ArraySearching.js — Basic console output example
- 71_Arrays_IQ.js — Basic console output example
- 72_Array_Iterate.js — Looping and iteration examples
- 73_ArraysTransform.js — Array transformation with map() and filter()
- 74_Sorting.js — Array utility and transformation examples
- 75_Slicing.js — Array utility and transformation examples
- 76_ArrayConcat.js — Array utility and transformation examples
- 77_ArrayChecking.js — Array transformation with map() and filter()
- 78_ShallowDeepCopy.js — Array utility and transformation examples
- 79_Destructuring.js — Array destructuring and rest syntax

## Chapter 11 — Functions

### Files covered

- 100_TDZ.js — Basic console output example
- 101_IQ.js — Basic console output example
- 102_IQ.js — Basic console output example
- 103_IQ.js — Basic console output example
- 80_Fn.js — Basic console output example
- 81_Fn.js — Basic console output example
- 82_Type1_BasicFn.js — Array validation and predicate checks
- 83_Type2_BasicsFn.js — Looping and iteration examples
- 84_Type3_BasicsFn.js — Basic console output example
- 85_Type4_BasicFn.js — Basic console output example
- 86_TemplateLiteral.js — Basic console output example
- 87_ExpressionFunction.js — Basic console output example
- 88_ArrowFn.js — Basic console output example
- 89_ArrowFn.js — Looping and iteration examples
- 90_RealTimeArrowFnUse.js — Basic console output example
- 91_IIFE.js — Looping and iteration examples
- 92_SpreadFn.js — Array validation and predicate checks
- 93_ReturnFn.js — Conditional branching examples
- 94_VarLetConst1.js — Looping and iteration examples
- 94_VarLetConst2.js — Basic console output example
- 95_Hoisting.js — Looping and iteration examples
- 96_VarHoisting.js — Basic console output example
- 97_FunctionHoisting.js — Basic console output example
- 98_LetHoisting.js — Basic console output example
- 99_LetTDZ.js — Basic console output example
- Default_ParamFn1.js — Basic console output example
- Default_ParamFn2.js — Basic console output example
- RestOfParamsFn.js — Basic console output example

## Chapter 12 — FunctionClosure

### Files covered

- 104_ScopeFn.js — Basic console output example
- 105_Closure.js — Basic console output example
- 106_Closure_Remembers.js — Basic console output example
- 107_Closure_RealTimeEx.js — Looping and iteration examples
- 108_Simple_Fn.js — Basic console output example

## Chapter 13 — Strings

### Files covered

- 109_Strings.js — Looping and iteration examples
- 110_String_Functions.js — Basic console output example
- 111_String_Searching.js — Basic console output example

## Practice Programs

### Files covered

- 01_HelloWorld.js — Basic console output example
- 02_TakeInputFromUsers.js — Looping and iteration examples
- 03_TablePrintUsingSystemOut.js — Looping and iteration examples
- 04_FizzBuzz.js — Conditional branching examples
- 05_FindMaximumArray.js — Looping and iteration examples
- 05_GradeCalculator.js — Conditional branching examples
- 06_FrequencyOfArrayElement.js — Array transformation with map() and filter()
- 06_LeapYearChecker.js — Conditional branching examples
- 07_TriangleClassifier.js — Conditional branching examples
- 08_SwapTwoNumbersWithoutThirdVariable.js — Looping and iteration examples
- 09_RightTriangleStarPattern.js — Looping and iteration examples
- 10_LeftTriangleStarPattern.js — Looping and iteration examples
- 11_PyramidPattern.js — JavaScript practice example
- Filter_Sort_Array.js — Array utility and transformation examples
- FindDuplicateElements.js — Conditional branching examples
- RateLimitingAPI.js — Basic console output example

---

## How to Refresh This README

Run the following command from the repository root to scan the workspace and refresh the chapter coverage automatically:

```bash
npm run readme:sync
```
