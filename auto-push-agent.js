const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");

const repoPath = __dirname;
const POLL_INTERVAL_MS = 30_000;
const COOLDOWN_MS = 10_000;
const README_PATH = path.join(repoPath, "README.md");

let onCooldown = false;

// ── Helpers ──────────────────────────────────────────────────────────────────

function run(cmd) {
  try {
    return execSync(cmd, { cwd: repoPath, encoding: "utf8", shell: true }).trim();
  } catch {
    return "";
  }
}

function hasChanges() {
  return run("git status --porcelain").length > 0;
}

function countChanged() {
  const s = run("git status --porcelain");
  return s ? s.split("\n").length : 0;
}

// ── README auto-update ───────────────────────────────────────────────────────

/** Chapter directories (in display order) */
const CHAPTER_DIRS = [
  "Chapter_01_Basics",
  "Chapter_02_JavaScriptBasics",
  "Chapter_03_Identifier",
  "Chapter_04_Literals",
  "Chapter_05_Operators",
];

/**
 * Extract a one-line description from a .js file by reading its first ~15 lines.
 * Priority: Topic/Concept comment  →  first meaningful comment  →  filename-based fallback
 */
function extractDescription(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const lines = content.split("\n").map((l) => l.trim());

    // Priority 1: lines with "Topic:" or "Concept:" in a comment
    for (const line of lines.slice(0, 15)) {
      const m = line.match(/\/\/\s*(?:Topic|Concept):\s*(.+)/i);
      if (m) return m[1].replace(/\s*\*+\/?\s*$/, "").trim();
    }

    // Priority 2: first non-trivial single-line comment (not separator lines)
    for (const line of lines.slice(0, 10)) {
      const m = line.match(/^\/\/\s*(.+)/);
      if (m) {
        const text = m[1].trim();
        if (
          text.length > 4 &&
          text.length < 110 &&
          !text.startsWith("=") &&
          !text.startsWith("-") &&
          !text.startsWith("*") &&
          !text.match(/^\d+[\.\)]/)
        ) {
          return text;
        }
      }
    }

    // Priority 3: look for key JS keywords in the first few code lines
    const codeLines = lines.filter((l) => l && !l.startsWith("//") && !l.startsWith("/*") && !l.startsWith("*"));
    for (const line of codeLines.slice(0, 5)) {
      // Detect operator patterns
      if (line.includes("===") || line.includes("==")) return "loose vs strict equality operators (==";
      if (line.includes("&&") || line.includes("||")) return "logical operators (&&, ||, !)";
      if (line.includes("?")) return "ternary conditional operator";
      if (line.includes("+=")) return "compound assignment operators";
      if (line.match(/console\.log\(.*typeof/)) return "typeof operator";
      if (line.match(/console\.log\(.*`/)) return "template literal usage";
    }

    // Priority 4: first code line as hint
    const firstCode = codeLines.find((l) => !l.startsWith("*") && !l.startsWith("/*") && l.length > 5);
    if (firstCode) {
      const hint = firstCode.replace(/[{};]/g, "").trim();
      if (hint.length < 100) return hint;
    }

    // Fallback: read the _very_ first non-empty line (could be a shebang / directive)
    return lines.find((l) => l.length > 3)?.replace(/^\/\//, "").trim() || "JavaScript exercise";
  } catch {
    return "JavaScript exercise";
  }
}

/** Return sorted list of .js file names inside a chapter directory. */
function getJsFiles(dirName) {
  const full = path.join(repoPath, dirName);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter((f) => f.endsWith(".js")).sort();
}

/** Build a markdown file-table string for a chapter directory. */
function buildFileTable(dirName) {
  const files = getJsFiles(dirName);
  if (files.length === 0) return "";

  const rows = files.map((f) => {
    const num = (f.match(/^(\d+)/) || [])[1] || "—";
    const desc = extractDescription(path.join(repoPath, dirName, f));
    return `| ${num} | \`${f}\` | ${desc} |`;
  });

  return [
    "| # | File | Covers |",
    "|---|------|--------|",
    ...rows,
  ].join("\n");
}

/**
 * Rebuild every file table in README.md that's wrapped with
 *   <!-- AUTO_FILE_TABLE:Chapter_XX -->
 *   ... current table ...
 *   <!-- /AUTO_FILE_TABLE -->
 *
 * Skips silently if the markers don't exist (first run).
 */
function rebuildReadmeFileTables() {
  let readme;
  try {
    readme = fs.readFileSync(README_PATH, "utf8");
  } catch {
    console.warn("README.md not found — skipping auto-update.");
    return false;
  }

  let updated = readme;
  let changed = false;

  for (const dir of CHAPTER_DIRS) {
    const startMarker = `<!-- AUTO_FILE_TABLE:${dir} -->`;
    const endMarker = "<!-- /AUTO_FILE_TABLE -->";

    const startIdx = updated.indexOf(startMarker);
    const endIdx = updated.indexOf(endMarker);

    if (startIdx === -1 || endIdx === -1) continue;

    // Content starts after the marker line, ends before the end marker line
    const contentStart = startIdx + startMarker.length;
    const contentEnd = endIdx;

    const oldBlock = updated.slice(contentStart, contentEnd).trimEnd();
    const newTable = buildFileTable(dir);

    if (oldBlock.trim() !== newTable.trim()) {
      updated =
        updated.slice(0, contentStart) +
        "\n" +
        newTable +
        "\n" +
        updated.slice(contentEnd);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(README_PATH, updated, "utf8");
    console.log(`[${timestamp()}] README.md file tables updated.`);
  }

  return changed;
}

// ── Git push ─────────────────────────────────────────────────────────────────

function timestamp() {
  return new Date().toISOString().replace("T", " ").slice(0, 19);
}

function pushChanges() {
  const ts = timestamp();
  const changed = countChanged();

  // 1. Rebuild file tables in README before staging
  rebuildReadmeFileTables();

  // 2. Stage everything (includes README updates)
  run("git add -A");

  // 3. Commit
  const msg = `auto: update ${changed} files [${ts}]${os.EOL}${os.EOL}Co-authored-by: CommandCodeBot <noreply@commandcode.ai>`;
  execSync("git commit -F -", {
    cwd: repoPath,
    encoding: "utf8",
    shell: true,
    input: msg,
  });

  // 4. Pull rebase to catch remote changes
  run("git pull --rebase");

  // 5. Push
  const pushResult = run("git push");

  if (
    pushResult.includes("up-to-date") ||
    pushResult.includes("-> main") ||
    pushResult.includes("Everything up-to-date")
  ) {
    console.log(`[${ts}] Pushed ${changed} file(s) successfully.`);
  } else {
    console.log(`[${ts}] Push result:\n${pushResult}`);
  }
}

// ── Poll loop ────────────────────────────────────────────────────────────────

function tick() {
  if (onCooldown) return;
  if (!hasChanges()) return;

  const ts = timestamp();
  console.log(`[${ts}] Changes detected. Updating README and pushing...`);
  onCooldown = true;
  pushChanges();
  setTimeout(() => {
    onCooldown = false;
  }, COOLDOWN_MS);
}

console.log(`Auto-push agent started — polling every ${POLL_INTERVAL_MS / 1000}s`);
console.log(`Watching: ${repoPath}`);
tick();
setInterval(tick, POLL_INTERVAL_MS);

process.on("SIGINT", () => {
  console.log("\nAuto-push agent stopped.");
  process.exit(0);
});
process.on("SIGTERM", () => process.exit(0));
