// Midnight Fridge Roast — writes one roast line to /output/entry.txt
//
// The line: the fridge's own display taunts the owner ("Nice try, it's
// 12:03") and the punchline is a role reversal — the fridge locks the door
// like a parent catching a teenager sneaking out. One concrete detail (the
// exact time on the display), one turn, spoken first-person at the door.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge just flashed 'Nice try, it's 12:03' and locked the door like it caught me sneaking out.";

// Gate from the competition rules: entry.txt must be UTF-8 text of
// 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
