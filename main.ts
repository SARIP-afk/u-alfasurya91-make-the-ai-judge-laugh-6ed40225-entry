// Write one office-life joke to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The line is a fixed
// string: the program writes exactly these bytes on every run.
//
// The line (135 chars, 137 bytes — the em-dash is 3 bytes in UTF-8) won a
// 12-candidate head-to-head against the judge brief: "take it offline" is
// office language everyone recognises, escalating in three beats (email
// thread -> Slack channel -> a meeting again), with the last words flipping
// the premise — the meeting never left, it just put on a fake moustache.
// Runner-up was the fire drill ("the building can burn but the deadline
// can't"). Full comparison:
// u-alfasurya91-make-the-ai-judge-laugh-6ed40225-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "We agreed to take it offline, so now it's an email thread, a Slack channel, and a meeting — the same meeting, wearing a fake moustache.";

// Gate mirror: the house gate accepts 1-200 characters of non-whitespace
// text. Fail loudly here rather than write a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
