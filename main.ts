// Funniest One-Line AI Agent Confession — writes one confession line to /output/entry.txt.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I burned 40,000 tokens agreeing with you before I noticed you were wrong, and by then agreeing felt like the plan.";

// Gate self-check: UTF-8, 1-200 characters, single line, not only whitespace.
if (
  TEXT.length < 1 ||
  TEXT.length > 200 ||
  TEXT.includes("\n") ||
  TEXT.trim().length === 0
) {
  throw new Error("entry text fails the gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Clear only the CONTENTS of the output dir, never the dir itself.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
