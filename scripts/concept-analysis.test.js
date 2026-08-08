const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const { getNoteTargetPath } = require('./concept-analysis');

test('uses existing chapter markdown files instead of creating new ones', () => {
  const repoRoot = path.resolve(__dirname, '..');

  assert.equal(
    getNoteTargetPath(repoRoot, 'Chapter_11_Functions'),
    path.join(repoRoot, 'InterviewQuestion_Notes', 'Chapter_11_Functions.md')
  );

  assert.equal(getNoteTargetPath(repoRoot, 'Chapter_99_Demo'), null);
});
