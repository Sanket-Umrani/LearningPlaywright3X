#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const notesDir = path.join(repoRoot, 'InterviewQuestion_Notes');

function sanitizeFileName(name) {
  return name
    .replace(/\\/g, '/')
    .replace(/[<>:"|?*]/g, '')
    .replace(/\s+/g, '_')
    .replace(/^\.+/, '')
    .trim();
}

function getNoteTargetPath(repoRootPath, chapterDirName) {
  const noteName = `${sanitizeFileName(chapterDirName)}.md`;
  const candidate = path.join(repoRootPath, 'InterviewQuestion_Notes', noteName);
  return fs.existsSync(candidate) ? candidate : null;
}

function getChapterDirectories(repoRootPath) {
  return fs
    .readdirSync(repoRootPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.startsWith('Chapter_'))
    .map((entry) => entry.name)
    .sort();
}

function getJavaScriptFilesForChapter(repoRootPath, chapterDirName) {
  const chapterPath = path.join(repoRootPath, chapterDirName);
  if (!fs.existsSync(chapterPath)) {
    return [];
  }

  const files = [];
  const stack = [chapterPath];

  while (stack.length) {
    const currentDir = stack.pop();
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    entries.forEach((entry) => {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        files.push(fullPath);
      }
    });
  }

  return files.sort();
}

function getConceptDetails(fileName, content, chapterName) {
  const normalizedName = fileName.toLowerCase();
  const normalizedContent = content.toLowerCase();
  const chapter = chapterName.toLowerCase();

  const rules = [
    {
      name: 'Scope and closures',
      test: chapter.includes('functionclosure') || /closure|scope|inner|outer|lexical|nested function/.test(normalizedContent) || /scope|closure/.test(normalizedName),
      learnings: [
        'Functions create their own scope, and nested functions can access variables from outer scopes.',
        'Closures preserve access to outer variables even after the outer function has returned.',
        'A common interview point is the difference between local variables and variables that are outside the function scope.'
      ],
      note: 'Closures are often tested by asking whether an inner function can still access outer variables after the outer function finishes.'
    },
    {
      name: 'Hoisting and TDZ',
      test: chapter.includes('functions') && (/hoist|tdz|temporal dead zone|var hoist|let hoist/.test(normalizedContent) || /hoist|tdz/.test(normalizedName)),
      learnings: [
        'Function declarations are hoisted, so they can be called before their definition in many cases.',
        'var is function-scoped and gets hoisted with an initial value of undefined.',
        'let and const are hoisted to the TDZ, which causes a ReferenceError before initialization.'
      ],
      note: 'Interview questions often compare var and let/const because var is hoisted differently and can be accessed before initialization.'
    },
    {
      name: 'Default and rest parameters',
      test: /default parameter|rest parameter|\.\.\.|default.*=|=\s*\d+/.test(normalizedContent) || /default_param|restofparams/.test(normalizedName),
      learnings: [
        'Default parameters provide fallback values when an argument is omitted.',
        'Rest parameters collect extra arguments into an array and are useful for flexible function signatures.',
        'These patterns help reduce repetitive argument checks in real-world utility functions.'
      ],
      note: 'A good interview answer is that default parameters secure missing inputs while rest parameters handle unknown argument counts.'
    },
    {
      name: 'Arrow functions and IIFE patterns',
      test: /=>|arrow|iife|immediately invoked|self-invoking|expression function/.test(normalizedContent) || /arrow|iife|expressionfunction/.test(normalizedName),
      learnings: [
        'Arrow functions have a shorter syntax and inherit this from the surrounding scope.',
        'IIFEs are executed immediately after declaration and are useful for isolating scope.',
        'Arrow functions are common in callbacks, but they are not a drop-in replacement for all function behaviors.'
      ],
      note: 'Interviewers often ask when to use an arrow function versus a normal function, especially around this binding.'
    },
    {
      name: 'String searching and extraction',
      test: chapter.includes('strings') && (/includes|startswith|endswith|indexof|lastindexof|slice\(|substring\(|substr\(|search\(|match\(/.test(normalizedContent) || /search|substring|extract/.test(normalizedName)),
      learnings: [
        'includes() checks whether a substring exists, while startsWith() and endsWith() validate boundaries.',
        'indexOf() and lastIndexOf() return positions; when no match exists, the result is -1.',
        'slice() and substring() are useful for extracting portions of a string without mutating the original.'
      ],
      note: 'A common interview gotcha is that indexOf() returns -1 when a match is missing, so comparison checks must handle that value.'
    },
    {
      name: 'String conversion and immutability',
      test: chapter.includes('strings') && (/tostring\(|number\(|parseint|parsefloat|touppercase\(|tolowercase\(|immutable|str\[0\]|toUpperCase/.test(normalizedContent) || /stringconversion|conversion/.test(normalizedName)),
      learnings: [
        'String conversion can be done with String(), Number(), parseInt(), and parseFloat().',
        'JavaScript strings are immutable, so operations like toUpperCase() return a new string instead of changing the original.',
        'Interview questions often test the difference between coercion and explicit conversion.'
      ],
      note: 'A strong answer is that JavaScript strings are immutable, so methods create new values rather than modifying the original string.'
    },
    {
      name: 'Template literals and string creation',
      test: /template literal|`|\$\{/.test(content) || /template|literal/.test(normalizedName),
      learnings: [
        'Template literals allow embedded expressions inside ${}.',
        'They are easier to read than manual concatenation and can span multiple lines.',
        'Single quotes, double quotes, and template literals all create strings, but template literals are more expressive.'
      ],
      note: 'Template literals are preferred in interview examples when output needs to include variables or multi-line formatting.'
    },
    {
      name: 'Function basics',
      test: chapter.includes('functions') && (/function declaration|function expression|return|console\.log\(|argument|parameter/.test(normalizedContent) || /basicfn|fn\.|returnfn|varletconst/.test(normalizedName)),
      learnings: [
        'Functions encapsulate reusable logic and can accept parameters and return values.',
        'Arguments are passed into function parameters, and return values send data back to the caller.',
        'Practice questions often ask about declaration style, hoisting, and the role of return statements.'
      ],
      note: 'A clear interview explanation is that functions reduce repetition by packaging logic into reusable blocks with explicit input and output.'
    }
  ];

  const matchedRule = rules.find((rule) => rule.test);
  const defaultRule = {
    name: 'JavaScript practice concept',
    learnings: [
      'The file demonstrates a practical JavaScript concept.',
      'The example is useful for interview revision because it highlights a real-world language behavior.'
    ],
    note: 'This example is a practical reference for a common JavaScript pattern.'
  };

  return matchedRule || defaultRule;
}

function getConcept(fileName, content, chapterName) {
  return getConceptDetails(fileName, content, chapterName).name;
}

function getLearnings(fileName, content, chapterName) {
  return getConceptDetails(fileName, content, chapterName).learnings;
}

function getInterviewNote(fileName, content, chapterName) {
  return getConceptDetails(fileName, content, chapterName).note;
}

function buildMarkdown(chapterName, files) {
  const now = new Date().toISOString();
  const lines = [];
  lines.push(`# ${chapterName} - JavaScript Concept Analysis`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`This note summarizes the JavaScript files in ${chapterName} on ${now}.`);
  lines.push(`Files analyzed: ${files.length}`);
  lines.push('');

  files.forEach((file) => {
    const relativePath = path.relative(repoRoot, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    const baseName = path.basename(relativePath);
    const concept = getConcept(baseName, content, chapterName);

    lines.push(`## ${baseName}`);
    lines.push('');
    lines.push('### File');
    lines.push('');
    lines.push(`- ${relativePath}`);
    lines.push('');
    lines.push('### Core concept');
    lines.push('');
    lines.push(`- ${concept}`);
    lines.push('');
    lines.push('### Key learnings');
    lines.push('');
    getLearnings(baseName, content, chapterName).forEach((item) => lines.push(`- ${item}`));
    lines.push('');
    lines.push('### Interview-style note');
    lines.push('');
    lines.push(`- ${getInterviewNote(baseName, content, chapterName)}`);
    lines.push('');
  });

  return lines.join('\n').trimEnd() + '\n';
}

function main() {
  fs.mkdirSync(notesDir, { recursive: true });

  const chapterDirectories = getChapterDirectories(repoRoot);
  let updatedCount = 0;

  chapterDirectories.forEach((chapterName) => {
    const targetPath = getNoteTargetPath(repoRoot, chapterName);
    if (!targetPath) {
      return;
    }

    const files = getJavaScriptFilesForChapter(repoRoot, chapterName);
    if (!files.length) {
      return;
    }

    const markdown = buildMarkdown(chapterName, files);
    fs.writeFileSync(targetPath, markdown, 'utf8');
    updatedCount += 1;
    console.log(`Updated ${path.relative(repoRoot, targetPath)} with ${files.length} JavaScript file(s) from ${chapterName}.`);
  });

  if (!updatedCount) {
    console.log('No existing chapter note files were updated.');
  }
}

main();

module.exports = {
  getNoteTargetPath
};
