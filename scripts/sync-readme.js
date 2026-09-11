const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const readmePath = path.join(root, 'README.md');

function listChapterDirs() {
  return fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^Chapter_\d+/.test(entry.name))
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

function getChangedFiles() {
  let output;
  try {
    output = execFileSync(
      'git',
      ['-C', root, 'status', '--porcelain', '--untracked-files=all'],
      { encoding: 'utf8' }
    );
  } catch (error) {
    return [];
  }

  const files = [];
  output.split(/\r?\n/).filter(Boolean).forEach((line) => {
    const status = line.slice(0, 2);
    if (!/[?AM]/.test(status)) return;

    let file = line.slice(3).trim();
    if (file.includes(' -> ')) {
      file = file.split(' -> ').pop().trim();
    }
    if (!/\.(js|ts)$/i.test(file)) return;

    const parts = file.replace(/\\/g, '/').split('/');
    if (parts.length !== 2) return;

    const container = parts[0];
    const fileName = parts[1];
    if (container === 'PracticePrograms') {
      files.push({ container, fileName, practice: true });
    } else if (/^Chapter_\d+/.test(container)) {
      files.push({ container, fileName, practice: false });
    }
  });

  return files.sort((a, b) =>
    `${a.container}/${a.fileName}`.localeCompare(`${b.container}/${b.fileName}`)
  );
}

function findTreeBlock(lines) {
  const start = lines.findIndex((line) => line.trim() === '```text');
  if (start === -1) return null;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (lines[i].trim() === '```') return { start, end: i };
  }
  return null;
}

function findTreeDir(lines, block, container) {
  for (let i = block.start + 1; i < block.end; i += 1) {
    const match = lines[i].match(/^[├└]── (.+)\/$/);
    if (match && match[1] === container) return i;
  }
  return -1;
}

function ensureTreeContainer(lines, container) {
  const block = findTreeBlock(lines);
  if (!block || findTreeDir(lines, block, container) !== -1) return;

  let insertAt = -1;
  for (let i = block.start + 1; i < block.end; i += 1) {
    const match = lines[i].match(/^[├└]── (.+)\/$/);
    if (!match) continue;
    const name = match[1];
    if (/^Chapter_\d+/.test(container) && /^Chapter_\d+/.test(name) && name.localeCompare(container) > 0) {
      insertAt = i;
      break;
    }
    if (name === 'PracticePrograms' && container.localeCompare('PracticePrograms') < 0) {
      insertAt = i;
      break;
    }
  }

  if (insertAt === -1) {
    const practice = lines.findIndex((line) => line === '├── PracticePrograms/');
    insertAt = practice !== -1 ? practice : block.end;
  }

  lines.splice(insertAt, 0, `├── ${container}/`);
}

function ensureTreeFile(lines, container, fileName) {
  const block = findTreeBlock(lines);
  if (!block) return;

  const headerIdx = findTreeDir(lines, block, container);
  if (headerIdx === -1) return;

  let blockEnd = block.end;
  for (let i = headerIdx + 1; i < block.end; i += 1) {
    if (/^[├└]── .+\/$/.test(lines[i])) {
      blockEnd = i;
      break;
    }
  }

  const fileLines = [];
  for (let i = headerIdx + 1; i < blockEnd; i += 1) {
    const match = lines[i].match(/^│   ├── (.+)$/);
    if (match) fileLines.push({ index: i, name: match[1] });
  }

  if (fileLines.some((entry) => entry.name === fileName)) return;

  const next = fileLines.find((entry) => entry.name.localeCompare(fileName) > 0);
  let insertAt;
  if (next) {
    insertAt = next.index;
  } else if (fileLines.length) {
    insertAt = fileLines[fileLines.length - 1].index + 1;
  } else {
    insertAt = headerIdx + 1;
  }

  lines.splice(insertAt, 0, `│   ├── ${fileName}`);
}

function coverageHeading(container, practice) {
  return practice ? '## Practice Programs' : `## ${formatFolderName(container)}`;
}

function findSection(lines, heading) {
  const start = lines.findIndex((line) => line === heading);
  if (start === -1) return null;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (lines[i].startsWith('## ')) return { start, end: i };
  }
  return { start, end: lines.length };
}

function ensureCoverageSection(lines, container, practice) {
  const heading = coverageHeading(container, practice);
  if (lines.includes(heading)) return;

  let insertAt = -1;
  if (!practice) {
    const later = listChapterDirs().find((dir) => dir.localeCompare(container) > 0);
    if (later) insertAt = lines.indexOf(coverageHeading(later, false));
  }
  if (insertAt === -1) insertAt = lines.indexOf('## Practice Programs');
  if (insertAt === -1) insertAt = lines.findIndex((line) => line.startsWith('## '));
  if (insertAt === -1) insertAt = lines.length;

  lines.splice(insertAt, 0, heading, '', '### Files covered', '');
}

function upsertCoverageBullet(lines, container, fileName, practice) {
  const section = findSection(lines, coverageHeading(container, practice));
  if (!section) return;

  const fullPath = path.join(root, container, fileName);
  const content = fs.readFileSync(fullPath, 'utf8');
  const bullet = `- ${fileName} — ${inferSummary(fileName, content)}`;
  const bulletPattern = /^- (.+?) — (.+)$/;

  let lastBullet = -1;
  for (let i = section.start + 1; i < section.end; i += 1) {
    const match = lines[i].match(bulletPattern);
    if (!match) continue;
    if (match[1] === fileName) {
      if (lines[i] !== bullet) lines[i] = bullet;
      return;
    }
    lastBullet = i;
  }

  if (lastBullet !== -1) {
    for (let i = section.start + 1; i < section.end; i += 1) {
      const match = lines[i].match(bulletPattern);
      if (match && match[1].localeCompare(fileName) > 0) {
        lines.splice(i, 0, bullet);
        return;
      }
    }
    lines.splice(lastBullet + 1, 0, bullet);
    return;
  }

  const filesCoveredIdx = lines.indexOf('### Files covered', section.start + 1);
  if (filesCoveredIdx === -1) {
    lines.splice(section.start + 1, 0, bullet);
    return;
  }

  let insertAt = filesCoveredIdx + 1;
  while (insertAt < section.end && lines[insertAt] === '') insertAt += 1;

  if (insertAt === filesCoveredIdx + 1 || insertAt >= section.end) {
    lines.splice(insertAt, 0, bullet, '');
  } else {
    lines.splice(insertAt, 0, bullet);
  }
}

function main() {
  if (!fs.existsSync(readmePath)) {
    console.error(`README.md not found at ${readmePath}`);
    process.exitCode = 1;
    return;
  }

  const changed = getChangedFiles();
  if (!changed.length) {
    console.log('No untracked or modified JavaScript/TypeScript files found. README.md unchanged.');
    return;
  }

  const raw = fs.readFileSync(readmePath, 'utf8');
  const eol = raw.includes('\r\n') ? '\r\n' : '\n';
  const lines = raw.split(eol);

  changed.forEach(({ container, fileName, practice }) => {
    ensureTreeContainer(lines, container);
    ensureTreeFile(lines, container, fileName);
    ensureCoverageSection(lines, container, practice);
    upsertCoverageBullet(lines, container, fileName, practice);
  });

  const result = lines.join(eol);
  if (result === raw) {
    console.log('README.md already includes all untracked and modified files.');
    return;
  }

  fs.writeFileSync(readmePath, result, 'utf8');
  console.log(`Updated ${path.relative(root, readmePath)} with ${changed.length} untracked or modified file(s).`);
}

main();
