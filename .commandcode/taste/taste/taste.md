# Taste
- Prefers incremental, minimally-invasive edits over full regeneration: when a tool/script updates a file (e.g. README sync), only touch the entries that actually changed and leave all other existing content byte-for-byte untouched. Confidence: 0.6
- Wants repo maintenance tasks exposed as reusable, ongoing tooling (e.g. an npm script invoked via command) that keeps working for future updates rather than being fixed once for the current state. Confidence: 0.6
- Prefers modifying existing files in place over creating new ones: expects already-present files (e.g. README.md) to be edited, and questions the creation of new files when a suitable one exists. Confidence: 0.7
- Wants a review-then-commit-then-push git flow: inspect status/diffs first, then commit and push the current branch to its existing origin remote, and report back the commit hash and push result. Confidence: 0.65
- Hard git safety rules: never force-push, and never reset, checkout, or discard changes; keep commits scoped to the related changes and leave unrelated files untouched. Confidence: 0.8
- Prefers concise commit messages. Confidence: 0.6
- Wants changes pushed to GitHub automatically as ongoing automation (e.g. a background agent that commits/pushes), rather than requiring a manual push each time; prefers this to run on its own schedule rather than gated behind a manual magic-phrase trigger (had a "go go go" trigger variant rolled back). Confidence: 0.6
- Expects generated/derived files (e.g. README) to be refreshed as a step inside the auto commit/push flow, so any pushed state is already in sync rather than needing a separate manual sync. Confidence: 0.5
- Prefers long-running background automation (polling agents/daemons) to auto-shut-down once it has been idle/no changes for a while instead of running indefinitely. Confidence: 0.5
