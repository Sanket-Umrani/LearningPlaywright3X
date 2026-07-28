const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const readmePath = path.join(root, 'README.md');

function listChapterDirs() {
  return fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^Chapter_\d+/.test(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function listJsFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.js'))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function inferSummary(fileName, content) {
  const lower = `${fileName}\n${content}`.toLowerCase();

  if (lower.includes('map') && lower.includes('filter')) {
    return 'Array transformation with map() and filter()';
  }
  if (lower.includes('sort') || lower.includes('slice') || lower.includes('concat')) {
    return 'Array utility and transformation examples';
  }
  if (lower.includes('destruct')) {
    return 'Array destructuring and rest syntax';
  }
  if (lower.includes('every') || lower.includes('some') || lower.includes('isarray')) {
    return 'Array validation and predicate checks';
  }
  if (lower.includes('switch')) {
    return 'Switch-case decision examples';
  }
  if (lower.includes('if') && lower.includes('else')) {
    return 'Conditional branching examples';
  }
  if (lower.includes('for') || lower.includes('while') || lower.includes('do')) {
    return 'Looping and iteration examples';
  }
  if (lower.includes('prompt') || lower.includes('input')) {
    return 'User input handling examples';
  }
  if (lower.includes('console.log')) {
    return 'Basic console output example';
  }
  return 'JavaScript practice example';
}

function formatFolderName(folderName) {
  const match = folderName.match(/^Chapter_(\d+)_/);
  if (!match) {
    return folderName.replace(/_/g, ' ');
  }
  const number = match[1];
  const rest = folderName.replace(/^Chapter_\d+_/, '').replace(/_/g, ' ');
  return `Chapter ${number} — ${rest}`;
}

function buildRepoTree() {
  const lines = [];
  lines.push('LearnPlaywright3x/');

  const chapterDirs = listChapterDirs();
  chapterDirs.forEach((dir) => {
    const files = listJsFiles(path.join(root, dir));
    lines.push(`├── ${dir}/`);
    files.forEach((file) => {
      lines.push(`│   ├── ${file}`);
    });
  });

  const practiceDir = path.join(root, 'PracticePrograms');
  const practiceFiles = listJsFiles(practiceDir);
  lines.push('├── PracticePrograms/');
  practiceFiles.forEach((file) => {
    lines.push(`│   ├── ${file}`);
  });

  lines.push('├── InterviewQuestion_Notes/');
  lines.push('├── Utilities&Prompts/');
  lines.push('└── README.md');

  return ['```text', ...lines, '```'].join('\n');
}

function buildChapterSections() {
  const sections = [];
  const chapterDirs = listChapterDirs();

  chapterDirs.forEach((dir) => {
    const dirPath = path.join(root, dir);
    const files = listJsFiles(dirPath);
    const chapterTitle = formatFolderName(dir);
    const bullets = files.map((file) => {
      const fullPath = path.join(dirPath, file);
      const content = fs.readFileSync(fullPath, 'utf8');
      const summary = inferSummary(file, content);
      return `- ${file} — ${summary}`;
    });

    sections.push(`## ${chapterTitle}`);
    sections.push('');
    sections.push('### Files covered');
    sections.push('');
    sections.push(...bullets);
    sections.push('');
  });

  const practiceDir = path.join(root, 'PracticePrograms');
  const practiceFiles = listJsFiles(practiceDir);
  if (practiceFiles.length) {
    sections.push('## Practice Programs');
    sections.push('');
    sections.push('### Files covered');
    sections.push('');
    practiceFiles.forEach((file) => {
      const fullPath = path.join(practiceDir, file);
      const content = fs.readFileSync(fullPath, 'utf8');
      const summary = inferSummary(file, content);
      sections.push(`- ${file} — ${summary}`);
    });
    sections.push('');
  }

  return sections.join('\n').trimEnd();
}

function buildReadme() {
  const chapterSections = buildChapterSections();
  const repoTree = buildRepoTree();

  return `# LearnPlaywright3x

JavaScript Fundamentals & Automation Learning Repo

A learning repository tracking JavaScript fundamentals from first principles, alongside interview-style notes, practice programs, and automation-related prompts.

## Table of Contents

- [Repo Structure](#repo-structure)
- [Chapter Coverage](#chapter-coverage)
- [Practice Programs](#practice-programs)
- [How to Refresh This README](#how-to-refresh-this-readme)

---

## Repo Structure

${repoTree}

---

## Chapter Coverage

This section is generated from the current JavaScript files in the workspace. Run the refresh command below whenever new chapter files or untracked JavaScript files are added.

${chapterSections}

---

## How to Refresh This README

Run the following command from the repository root to scan the workspace and refresh the chapter coverage automatically:

\`\`\`bash
npm run readme:sync
\`\`\`
`;
}

function writeReadme() {
  const content = buildReadme();
  fs.writeFileSync(readmePath, content, 'utf8');
  console.log(`Updated ${path.relative(root, readmePath)} from the current workspace contents.`);
}

writeReadme();
