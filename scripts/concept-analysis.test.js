const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const fs = require('fs');
const os = require('os');
const { getNoteTargetPath, getChangedJavaScriptFiles, buildChangedMarkdown } = require('./concept-analysis');

test('creates a deterministic note path for every chapter', () => {
  const repoRoot = path.resolve(__dirname, '..');

  assert.equal(
    getNoteTargetPath(repoRoot, 'Chapter_11_Functions'),
    path.join(repoRoot, 'InterviewQuestion_Notes', 'Chapter_11_Functions.md')
  );

  assert.equal(
    getNoteTargetPath(repoRoot, 'Chapter_99_Demo'),
    path.join(repoRoot, 'InterviewQuestion_Notes', 'Chapter_99_Demo.md')
  );
});

test('collects modified, staged, and untracked JavaScript files', () => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'concept-analysis-'));
  const runGit = (...args) => require('child_process').execFileSync('git', ['-C', tempRoot, ...args]);

  runGit('init');
  fs.writeFileSync(path.join(tempRoot, 'tracked.js'), 'const tracked = true;');
  runGit('add', 'tracked.js');
  runGit('commit', '-m', 'initial', '--quiet');
  fs.writeFileSync(path.join(tempRoot, 'tracked.js'), 'const tracked = false;');
  fs.writeFileSync(path.join(tempRoot, 'staged.js'), 'const staged = true;');
  runGit('add', 'staged.js');
  fs.writeFileSync(path.join(tempRoot, 'untracked.js'), 'const untracked = true;');
  fs.writeFileSync(path.join(tempRoot, 'notes.md'), '# Ignore markdown');

  const files = getChangedJavaScriptFiles(tempRoot).map((filePath) => path.basename(filePath));
  assert.deepEqual(files, ['staged.js', 'tracked.js', 'untracked.js']);
  assert.match(buildChangedMarkdown(tempRoot, getChangedJavaScriptFiles(tempRoot)), /Files analyzed: 3/);
});
