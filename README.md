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
│   ├── 36_if_else_ifPatt1.js
│   ├── 36_Ifwithoutbraces.js
│   ├── 37_if_else_Part2.js
│   ├── 37_if_else.js
│   ├── 38_multiple_if_else.js
│   ├── IQ.js
├── Chapter_07_SwitchCase/
│   ├── 39_Switch.js
│   ├── 40_SwitchInterviewQuestion.js
│   ├── 41_SwitchInterviewQuestions.js
│   ├── 42_API_UseCaseSwitch.js
│   ├── 43_SwitchWithGroupingCases.js
│   ├── 44_SwitchInterviewQuestions.js
│   ├── 45_SwitchCaseInterviewuestions.js
│   ├── 46_SwitchCaseInterviewQuestions.js
│   ├── 47_IQPart1.js
│   ├── 47_IQPart2.js
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
│   ├── 110_String_FunctionsPart1.js
│   ├── 111_String_Searching.js
│   ├── 112_SubStringExtraction.js
│   ├── 113_String_FunctionsPart2.js
│   ├── 114_StringFunctionsPart3.js
│   ├── 115_StringConversions.js
├── Chapter_14_Objects/
│   ├── 116_ObjectsPart1.js
│   ├── 117_ObjectPerson.js
│   ├── 118_ObjectsPart2.js
│   ├── 119_ObjectsPart3.js
│   ├── 120_ObjectsConfig.js
│   ├── 121_CallByValueCallByRef.js
├── Chapter_15_MultiDimensionArray/
│   ├── 122_ArrayUnderstanding.js
│   ├── 123_ArraysPart1.js
│   ├── 124_Array_Functions.js
│   ├── 125_RightPatternUsingStdout.js
│   ├── 126_LeftPatternUsingStdout.js
│   ├── 127_PyramidPatternUsingStdout.js
├── Chapter_16_CallBack/
│   ├── 128_CallbackPart1.js
│   ├── 129_CallBackPart2.js
│   ├── 130_SyncCallBack.js
│   ├── 131_AsyncCallback.js
│   ├── 132_CallbackHell.js
│   ├── 133_RealtimeExample.js
│   ├── 134_CallReturn.js
│   ├── 135_PyramidDOM.js
├── Chapter_17_Promise/
│   ├── 136_PromisePart1.js
│   ├── 137_PromisePart2.js
│   ├── 138_PromisePart3.js
│   ├── 139_PromiseFinally.js
│   ├── 140_PromisePart4.js
│   ├── 141_PromisePart5.js
│   ├── 142_PromisePart6.js
│   ├── 143_PromisePart7.js
│   ├── 144_PromiseIQ1.js
│   ├── 145_PromiseIQ2.js
├── Chapter_18_Async_Await/
│   ├── 146_AsyncAwaitPart1.js
│   ├── 147_AsyncAwaitPart2.js
│   ├── 148_AsyncAwaitPart3.js
│   ├── 149_AsyncAwaitEx.js
│   ├── 150_AsyncAwaitPart4.js
│   ├── 151_SequenceExecution.js
│   ├── 152_ParallelExecution.js
│   ├── 153_API_FlakyTestCase1.js
│   ├── 153_API_FlakyTestCase2.js
│   ├── 154_AsyncAwaitIQ.js
├── Chapter_19_ExportImport/
│   ├── 155_ExportImport1.js
│   ├── 156_ExportImportWithAlias.js
│   ├── 157_ExportImport2.js
│   ├── testutils.js
│   ├── utils.js
├── Chapter_20_Class_Objects_OOPs/
├── Chapter_21_OOPs_Encapsulation/
│   ├── 169_EncapsulationPerson.js
│   ├── 170_EncapsulationCar.js
│   ├── 171_EncapsulationBank.js
│   ├── 172_EncapsulationIQ1.js
│   ├── 173_EncapsuationIQ2.js
│   ├── 174_EncapsulationIQ3.js
│   ├── 175_EncapsulationIQ4.js
├── Chapter_22_OOPs_Inheritance/
├── Chapter_23_Polymorphism/
│   ├── 187_MethodOverriding.js
├── Chapter_24_OOPs_InterviewQuestions/
│   ├── 188_InterviewQuestions1.js
│   ├── 189_InterviewQuestion2.js
│   ├── 190_InterviewQuestion3.js
│   ├── 191_InterviewQuestion4.js
│   ├── 192_InterviewQuestion5.js
├── Chapter_25_TypeScript/
│   ├── 193_JSWithoutDataType1.js
│   ├── 194_TypeScriptWithDataType1.js
│   ├── 195_TypeScript1.js
│   ├── 205_TypeScript11.ts
├── Chapter_26_OOPsTS_Abstraction/
│   ├── 211_Interface_Hook.ts
│   ├── 212_Real_TestConfig.ts
│   ├── 213_ClassCallingInterface.ts
│   ├── 214_InterfaceMiscellaneous.ts
│   ├── 215_Parametrized_Constructor.ts
├── PracticePrograms/
│   ├── 01_HelloWorld.js
│   ├── 02_TakeInputFromUsers.js
│   ├── 03_TablePrintUsingSystemOut.js
│   ├── 04_FizzBuzz.js
│   ├── 05_GradeCalculator.js
│   ├── 06_FrequencyOfArrayElement.js
│   ├── 06_LeapYearChecker.js
│   ├── 07_TriangleClassifier.js
│   ├── 08_SwapTwoNumbersWithoutThirdVariable.js
│   ├── 09_RightTriangleStarPattern.js
│   ├── 10_LeftTriangleStarPattern.js
│   ├── 11_PyramidPattern.js
│   ├── 13_CountVowelsAndConsonants.js
│   ├── 14_PalindromeChecker.js
│   ├── 15_StringReverse.js
│   ├── 16_RemoveDuplicateCharactersFromString.js
│   ├── 17_JavaAnagrams.js
│   ├── 18_ValidEmailRegex.js
│   ├── 19_RemoveWhiteSpacesFromString.js
│   ├── 20_CountNumberOfWordsInString.js
│   ├── 21_RemoveLeadingZeroesFromString.js
│   ├── 22_ExtractFirstLetterOfEachWord.js
│   ├── 23_FirstNonRepeatedCharacter.js
│   ├── 38_ReverseStringPreservingSpacePositions.js
│   ├── 39_PrimeNumberChecker.js
│   ├── 51_FindMaximumArray.js
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
- 18_ConfusingComparisons_P2.js — Conditional branching examples
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

- 36_if_else_ifPatt1.js — Conditional branching examples
- 36_Ifwithoutbraces.js — Array validation and predicate checks
- 37_if_else_Part2.js — Conditional branching examples
- 37_if_else.js — Conditional branching examples
- 38_multiple_if_else.js — Conditional branching examples
- IQ.js — Conditional branching examples

## Chapter 07 — SwitchCase

### Files covered

- 39_Switch.js — Switch-case decision examples
- 40_SwitchInterviewQuestion.js — Switch-case decision examples
- 41_SwitchInterviewQuestions.js — Switch-case decision examples
- 42_API_UseCaseSwitch.js — Switch-case decision examples
- 43_SwitchWithGroupingCases.js — Switch-case decision examples
- 44_SwitchInterviewQuestions.js — Switch-case decision examples
- 45_SwitchCaseInterviewuestions.js — Switch-case decision examples
- 46_SwitchCaseInterviewQuestions.js — Switch-case decision examples
- 47_IQPart1.js — Switch-case decision examples
- 47_IQPart2.js — Switch-case decision examples

## Chapter 08 — UserInputs

### Files covered

- 48_InputFromUser.js — Conditional branching examples
- 49_NodeUIInputFromUser.js — Conditional branching examples
- 50_NodeJsUserInputViaPrompt.js — Conditional branching examples
- 51_NodeJsUserInputWithoutPrompt.js — Looping and iteration examples

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
- 66_Array_Creation.js — Array validation and predicate checks
- 67_ArrayAccessModify.js — Looping and iteration examples
- 68_ArrayAddingRemove.js — Looping and iteration examples
- 69_Array_Real.js — Conditional branching examples
- 70_ArraySearching.js — Basic console output example
- 71_Arrays_IQ.js — Basic console output example
- 72_Array_Iterate.js — Array validation and predicate checks
- 73_ArraysTransform.js — Array transformation with map() and filter()
- 74_Sorting.js — Array utility and transformation examples
- 75_Slicing.js — Array utility and transformation examples
- 76_ArrayConcat.js — Array utility and transformation examples
- 77_ArrayChecking.js — Array transformation with map() and filter()
- 78_ShallowDeepCopy.js — Array utility and transformation examples
- 79_Destructuring.js — Array transformation with map() and filter()

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
- 89_ArrowFn.js — Conditional branching examples
- 90_RealTimeArrowFnUse.js — Basic console output example
- 91_IIFE.js — Basic console output example
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
- 108_Simple_Fn.js — Looping and iteration examples

## Chapter 13 — Strings

### Files covered

- 109_Strings.js — Looping and iteration examples
- 110_String_FunctionsPart1.js — Basic console output example
- 111_String_Searching.js — Basic console output example
- 112_SubStringExtraction.js — Array utility and transformation examples
- 113_String_FunctionsPart2.js — Basic console output example
- 114_StringFunctionsPart3.js — Looping and iteration examples
- 115_StringConversions.js — Basic console output example

## Chapter 14 — Objects

### Files covered

- 116_ObjectsPart1.js — Basic console output example
- 117_ObjectPerson.js — Looping and iteration examples
- 118_ObjectsPart2.js — Looping and iteration examples
- 119_ObjectsPart3.js — Basic console output example
- 120_ObjectsConfig.js — Basic console output example
- 121_CallByValueCallByRef.js — Looping and iteration examples

## Chapter 15 — MultiDimensionArray

### Files covered

- 122_ArrayUnderstanding.js — Looping and iteration examples
- 123_ArraysPart1.js — Array validation and predicate checks
- 124_Array_Functions.js — Array transformation with map() and filter()
- 125_RightPatternUsingStdout.js — Looping and iteration examples
- 126_LeftPatternUsingStdout.js — Looping and iteration examples
- 127_PyramidPatternUsingStdout.js — Looping and iteration examples

## Chapter 16 — CallBack

### Files covered

- 128_CallbackPart1.js — Looping and iteration examples
- 129_CallBackPart2.js — Looping and iteration examples
- 130_SyncCallBack.js — Array validation and predicate checks
- 131_AsyncCallback.js — Looping and iteration examples
- 132_CallbackHell.js — Basic console output example
- 133_RealtimeExample.js — Array validation and predicate checks
- 134_CallReturn.js — Basic console output example
- 135_PyramidDOM.js — Looping and iteration examples

## Chapter 17 — Promise

### Files covered

- 136_PromisePart1.js — Conditional branching examples
- 137_PromisePart2.js — Basic console output example
- 138_PromisePart3.js — Basic console output example
- 139_PromiseFinally.js — Basic console output example
- 140_PromisePart4.js — Looping and iteration examples
- 141_PromisePart5.js — Array validation and predicate checks
- 142_PromisePart6.js — Array validation and predicate checks
- 143_PromisePart7.js — Array validation and predicate checks
- 144_PromiseIQ1.js — Array validation and predicate checks
- 145_PromiseIQ2.js — Looping and iteration examples

## Chapter 18 — Async Await

### Files covered

- 146_AsyncAwaitPart1.js — Looping and iteration examples
- 147_AsyncAwaitPart2.js — Looping and iteration examples
- 148_AsyncAwaitPart3.js — Looping and iteration examples
- 149_AsyncAwaitEx.js — JavaScript practice example
- 150_AsyncAwaitPart4.js — Basic console output example
- 151_SequenceExecution.js — Looping and iteration examples
- 152_ParallelExecution.js — Array validation and predicate checks
- 153_API_FlakyTestCase1.js — Array validation and predicate checks
- 153_API_FlakyTestCase2.js — Looping and iteration examples
- 154_AsyncAwaitIQ.js — Looping and iteration examples

## Chapter 19 — ExportImport

### Files covered

- 155_ExportImport1.js — Looping and iteration examples
- 156_ExportImportWithAlias.js — Looping and iteration examples
- 157_ExportImport2.js — Looping and iteration examples
- testutils.js — Looping and iteration examples
- utils.js — Looping and iteration examples

## Chapter 20 — Class Objects OOPs

### Files covered


## Chapter 21 — OOPs Encapsulation

### Files covered

- 169_EncapsulationPerson.js — Basic console output example
- 170_EncapsulationCar.js — Basic console output example
- 171_EncapsulationBank.js — Conditional branching examples
- 172_EncapsulationIQ1.js — Array validation and predicate checks
- 173_EncapsuationIQ2.js — Basic console output example
- 174_EncapsulationIQ3.js — Basic console output example
- 175_EncapsulationIQ4.js — Basic console output example

## Chapter 22 — OOPs Inheritance

### Files covered


## Chapter 23 — Polymorphism

### Files covered

- 187_MethodOverriding.js — Looping and iteration examples

## Chapter 24 — OOPs InterviewQuestions

### Files covered

- 188_InterviewQuestions1.js — Basic console output example
- 189_InterviewQuestion2.js — Basic console output example
- 190_InterviewQuestion3.js — Basic console output example
- 191_InterviewQuestion4.js — Basic console output example
- 192_InterviewQuestion5.js — Basic console output example

## Chapter 25 — TypeScript

### Files covered

- 193_JSWithoutDataType1.js — JavaScript practice example
- 194_TypeScriptWithDataType1.js — Basic console output example
- 195_TypeScript1.js — Basic console output example
- 205_TypeScript11.ts — Array validation and predicate checks

## Chapter 26 — OOPsTS Abstraction

### Files covered

- 211_Interface_Hook.ts — Looping and iteration examples
- 212_Real_TestConfig.ts — Basic console output example
- 213_ClassCallingInterface.ts — Basic console output example
- 214_InterfaceMiscellaneous.ts — JavaScript practice example
- 215_Parametrized_Constructor.ts — Basic console output example

## Practice Programs

### Files covered

- 01_HelloWorld.js — Basic console output example
- 02_TakeInputFromUsers.js — Looping and iteration examples
- 03_TablePrintUsingSystemOut.js — Looping and iteration examples
- 04_FizzBuzz.js — Conditional branching examples
- 05_GradeCalculator.js — Conditional branching examples
- 06_FrequencyOfArrayElement.js — Array transformation with map() and filter()
- 06_LeapYearChecker.js — Conditional branching examples
- 07_TriangleClassifier.js — Conditional branching examples
- 08_SwapTwoNumbersWithoutThirdVariable.js — Looping and iteration examples
- 09_RightTriangleStarPattern.js — Looping and iteration examples
- 10_LeftTriangleStarPattern.js — Looping and iteration examples
- 11_PyramidPattern.js — Looping and iteration examples
- 13_CountVowelsAndConsonants.js — Conditional branching examples
- 14_PalindromeChecker.js — Conditional branching examples
- 15_StringReverse.js — Looping and iteration examples
- 16_RemoveDuplicateCharactersFromString.js — Looping and iteration examples
- 17_JavaAnagrams.js — Array utility and transformation examples
- 18_ValidEmailRegex.js — Looping and iteration examples
- 19_RemoveWhiteSpacesFromString.js — Looping and iteration examples
- 20_CountNumberOfWordsInString.js — Looping and iteration examples
- 21_RemoveLeadingZeroesFromString.js — User input handling examples
- 22_ExtractFirstLetterOfEachWord.js — Looping and iteration examples
- 23_FirstNonRepeatedCharacter.js — Array validation and predicate checks
- 38_ReverseStringPreservingSpacePositions.js — JavaScript practice example
- 39_PrimeNumberChecker.js — Conditional branching examples
- 51_FindMaximumArray.js — Looping and iteration examples
- Filter_Sort_Array.js — Array utility and transformation examples
- FindDuplicateElements.js — Conditional branching examples
- RateLimitingAPI.js — Basic console output example

---

## How to Refresh This README

Run the following command from the repository root to scan the workspace and refresh the chapter coverage automatically:

```bash
npm run readme:sync
```
