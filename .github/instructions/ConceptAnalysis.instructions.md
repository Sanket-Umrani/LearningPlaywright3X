---
applyTo: "**/*.js"
description: "Analyze untracked JavaScript changes and capture interview-style learnings in the InterviewQuestion_Notes folder."
---

# ConceptAnalysis

Use this instruction whenever you need to review new or untracked JavaScript work in this repository and turn it into a concise learning note.

## Workflow

1. Check the repository state for untracked or newly added JavaScript files using git status.
2. Review each affected .js file and identify:
   - the main programming concept being demonstrated,
   - the key JavaScript methods, operators, or patterns used,
   - one interview-style takeaway or gotcha,
   - one short practical example or note.
3. Create or update the markdown file at InterviewQuestion_Notes/ConceptAnalysis_Untracked_Notes.md.
4. Keep the content concise, structured, and aligned with the style already used in InterviewQuestion_Notes.
5. If the file already has a section for a given .js file, update that section instead of duplicating it.

## Output format

Use the following structure in the note file:

- Title: Untracked JavaScript Concept Analysis
- Summary section with the overall theme of the changes
- One section per .js file with:
  - File name
  - Core concept
  - Key learnings
  - Interview-style note

## Rules

- Focus on learning value, not raw code dumping.
- Prefer clear explanations over long descriptions.
- Mention practical gotchas when relevant, especially for array methods, scope, comparisons, or loops.
- Keep the tone educational and suitable for interview revision.

## Command to run

Use this command in the repository root whenever new untracked JavaScript files should be summarized:

- npm run concept:analysis

## Example prompt

Use this prompt to trigger the workflow:

- Run ConceptAnalysis for the current untracked changes and update the note file in InterviewQuestion_Notes.
- Run npm run concept:analysis to analyze all upcoming untracked JavaScript files.
