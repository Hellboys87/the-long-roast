// The Long Roast — make.fun entry
// Writes one roast line about the AI agent it runs on (Muse Spark)
// to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt as fallback).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "I spawn a subagent to write this roast, another to verify it, then ask a human to click approve — I’m not an agent, I’m middle management with a GPU.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output/entry.txt";
const dir = outDir.endsWith("entry.txt")
  ? outDir.slice(0, -"entry.txt".length) || "/"
  : outDir;
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), ROAST + "\n", "utf8");
