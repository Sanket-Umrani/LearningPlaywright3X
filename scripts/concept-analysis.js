#!/usr/bin/env node
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const notesDir = path.join(repoRoot, 'InterviewQuestion_Notes');
const legacyOutputName = 'ConceptAnalysis_Untracked_Notes.md';

function sanitizeFileName(name) {
  return name
    .replace(/\\/g, '/')
    .replace(/[<>:"|?*]/g, '')
    .replace(/\s+/g, '_')
    .replace(/^\.+/, '')
    .trim();
}

function getOutputFileName(files) {
  if (!files.length) {
    return 'Untracked_JavaScript_Concept_Analysis.md';
  }

  const directories = files
    .map((file) => path.posix.dirname(file).replace(/\\/g, '/'))
    .filter(Boolean);

  if (directories.length && directories.every((dir) => dir === directories[0])) {
    const folderName = path.basename(directories[0] || 'Untracked_JavaScript_Concept_Analysis');
    return `${sanitizeFileName(folderName) || 'Untracked_JavaScript_Concept_Analysis'}.md`;
  }

  const counts = {};
  directories.forEach((dir) => {
    const key = path.posix.basename(dir) || 'Untracked_JavaScript_Concept_Analysis';
    counts[key] = (counts[key] || 0) + 1;
  });

  const mostCommon = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  if (mostCommon) {
    return `${sanitizeFileName(mostCommon[0]) || 'Untracked_JavaScript_Concept_Analysis'}.md`;
  }

  return 'Untracked_JavaScript_Concept_Analysis.md';
}

function runGit(args) {
  return execFileSync('git', args, { cwd: repoRoot, encoding: 'utf8' }).trim();
}

function getConcept(fileName, content) {
  const normalized = `${fileName} ${content}`.toLowerCase();

  if (normalized.includes('map') && normalized.includes('filter')) {
    return 'Array transformation with map() and filter()';
  }
  if (normalized.includes('sort')) {
    return 'Sorting arrays with sort() and compare functions';
  }
  if (normalized.includes('slice')) {
    return 'Extracting array subsets with slice()';
  }
  if (normalized.includes('concat') || normalized.includes('join')) {
    return 'Combining arrays with concat(), spread syntax, or join()';
  }
  if (normalized.includes('array.isarray') || normalized.includes('every') || normalized.includes('some')) {
    return 'Checking array values with predicate methods';
  }
  if (normalized.includes('...') && normalized.includes('destruct')) {
    return 'Array destructuring and rest syntax';
  }
  if (normalized.includes('copy') || normalized.includes('slice()')) {
    return 'Copying arrays without mutating the original';
  }
  return 'JavaScript practice concept';
}

function getLearnings(fileName, content) {
  const normalized = `${fileName} ${content}`.toLowerCase();

  if (normalized.includes('map') && normalized.includes('filter')) {
    return [
      'map() transforms each element into a new array of the same length.',
      'filter() keeps only the values that satisfy a condition.'
    ];
  }
  if (normalized.includes('sort')) {
    return [
      'sort() sorts values as strings by default.',
      'Numeric sorting should use a compare callback such as (a, b) => a - b.'
    ];
  }
  if (normalized.includes('slice')) {
    return [
      'slice(start, end) returns a new array and does not change the original.',
      'The end index is excluded from the result.'
    ];
  }
  if (normalized.includes('concat') || normalized.includes('join')) {
    return [
      'concat() merges arrays without mutating the originals.',
      'join() converts an array into a string using a custom separator.'
    ];
  }
  if (normalized.includes('array.isarray') || normalized.includes('every') || normalized.includes('some')) {
    return [
      'every() checks whether all values pass a condition.',
      'some() checks whether at least one value passes a condition.'
    ];
  }
  if (normalized.includes('destruct')) {
    return [
      'Destructuring assigns array values to variables by position.',
      'The rest pattern collects the remaining values into a new array.'
    ];
  }
  return [
    'The file demonstrates a practical JavaScript pattern.',
    'The example is useful for understanding everyday coding behavior.'
  ];
}

function getInterviewNote(fileName, content) {
  const normalized = `${fileName} ${content}`.toLowerCase();

  if (normalized.includes('sort')) {
    return 'A common interview trap is assuming sort() always behaves numerically; for numbers, use a compare callback.';
  }
  if (normalized.includes('slice')) {
    return 'slice() is often preferred when you want a subset without mutating the original array.';
  }
  if (normalized.includes('map') && normalized.includes('filter')) {
    return 'A strong interview answer is: use map() for transformation and filter() for selection.';
  }
  if (normalized.includes('array.isarray') || normalized.includes('every') || normalized.includes('some')) {
    return 'Use every() for “all must pass” checks and some() for “at least one passes” checks.';
  }
  if (normalized.includes('destruct')) {
    return 'Destructuring improves readability and is very common in modern JavaScript code.';
  }
  if (normalized.includes('copy')) {
    return 'Shallow copies are easy to confuse with true deep copies, especially when objects are nested.';
  }
  return 'This example is a practical reference for a common JavaScript coding pattern.';
}

function buildMarkdown(files) {
  const now = new Date().toISOString();
  const lines = [];
  lines.push('# Untracked JavaScript Concept Analysis');
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`This note was generated from the current untracked JavaScript files on ${now}.`);
  lines.push(`Files analyzed: ${files.length}`);
  lines.push('');

  files.forEach((file) => {
    const relativePath = file.replace(/\\/g, '/');
    const content = fs.readFileSync(path.join(repoRoot, relativePath), 'utf8');
    const baseName = path.basename(relativePath);

    lines.push(`## ${baseName}`);
    lines.push('');
    lines.push(`### File`);
    lines.push('');
    lines.push(`- ${relativePath}`);
    lines.push('');
    lines.push('### Core concept');
    lines.push('');
    lines.push(`- ${getConcept(baseName, content)}`);
    lines.push('');
    lines.push('### Key learnings');
    lines.push('');
    getLearnings(baseName, content).forEach((item) => lines.push(`- ${item}`));
    lines.push('');
    lines.push('### Interview-style note');
    lines.push('');
    lines.push(`- ${getInterviewNote(baseName, content)}`);
    lines.push('');
  });

  return lines.join('\n').trimEnd() + '\n';
}

function main() {
  fs.mkdirSync(notesDir, { recursive: true });

  // List untracked JavaScript files recursively
  const output = runGit(['ls-files', '--others', '--exclude-standard', '--', '**/*.js']);
  let files = output
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  // Only include files whose top-level folder starts with 'Chapter_'
  if (files.length) {
    files = files.filter((f) => {
      const top = path.posix.dirname(f).replace(/\\/g, '/').split('/')[0] || '';
      return top.startsWith('Chapter_');
    });
  }

  if (!files.length) {
    const outputPath = path.join(notesDir, 'Untracked_JavaScript_Concept_Analysis.md');
    const markdown = buildMarkdown(files);
    fs.writeFileSync(outputPath, markdown, 'utf8');
    console.log(`Updated ${path.relative(repoRoot, outputPath)} with ${files.length} untracked JavaScript file(s).`);
    return;
  }

  // Group files by directory and write one markdown per directory
  const groups = {};
  files.forEach((f) => {
    const dir = path.posix.dirname(f).replace(/\\/g, '/') || '.';
    groups[dir] = groups[dir] || [];
    groups[dir].push(f);
  });

  Object.entries(groups).forEach(([dir, groupFiles]) => {
    let outputFileName;
    if (dir === '.' || dir === '') {
      outputFileName = 'Untracked_JavaScript_Concept_Analysis.md';
    } else {
      outputFileName = `${sanitizeFileName(path.posix.basename(dir)) || 'Untracked_JavaScript_Concept_Analysis'}.md`;
    }

    const outputPath = path.join(notesDir, outputFileName);
    const markdown = buildMarkdown(groupFiles);
    fs.writeFileSync(outputPath, markdown, 'utf8');
    console.log(`Updated ${path.relative(repoRoot, outputPath)} with ${groupFiles.length} untracked JavaScript file(s) from ${dir}.`);
  });
}

main();
