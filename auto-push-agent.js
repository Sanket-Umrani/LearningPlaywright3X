const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const os = require("os");

const repoPath = __dirname;
const POLL_INTERVAL_MS = 30_000;
const COOLDOWN_MS = 10_000;

let onCooldown = false;

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

function pushChanges() {
  const changed = countChanged();
  const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);

  run("git add -A");

  // Write commit message via stdin so special chars don't hit the shell
  const msg =
    `auto: update ${changed} files [${timestamp}]${os.EOL}${os.EOL}Co-authored-by: CommandCodeBot <noreply@commandcode.ai>`;
  const result = execSync("git commit -F -", {
    cwd: repoPath,
    encoding: "utf8",
    shell: true,
    input: msg,
  });

  const pushResult = run("git push");

  if (
    pushResult.includes("up-to-date") ||
    pushResult.includes("-> main") ||
    pushResult.includes("Everything up-to-date")
  ) {
    console.log(`[${timestamp}] Pushed ${changed} file(s) successfully.`);
  } else {
    console.log(`[${timestamp}] Push result:\n${pushResult}`);
  }
}

function tick() {
  if (onCooldown) return;
  if (!hasChanges()) return;

  const ts = new Date().toISOString().replace("T", " ").slice(0, 19);
  console.log(`[${ts}] Changes detected. Pushing...`);
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
