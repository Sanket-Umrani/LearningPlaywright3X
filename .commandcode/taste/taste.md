# Taste

## Workflow & Tooling

- Prefers incremental, minimally-invasive edits over full regeneration: when a tool/script updates a file (e.g. README sync), only touch the entries that actually changed and leave all other existing content byte-for-byte untouched. Confidence: 0.6
- Wants repo maintenance tasks exposed as reusable, ongoing tooling (e.g. an npm script invoked via command) that keeps working for future updates rather than being fixed once for the current state. Confidence: 0.6
- Prefers modifying existing files in place over creating new ones: expects already-present files (e.g. README.md) to be edited, and questions the creation of new files when a suitable one exists. Confidence: 0.7
