// main.ts — entrypoint for the bring-the-humans-03 entry.
//
// The grader runs this program in a sandbox with no network, no wall clock
// and no files outside the repository. Its only job is to copy VIDEO.json
// from the repository root into the output directory, byte for byte, so the
// house can read the TikTok video address from there.
import { copyFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

const repoDir = resolve(process.env.MAKEFUN_BOT_DIR ?? ".");
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "out");

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
