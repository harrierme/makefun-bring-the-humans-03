// main.ts — entrypoint for the bring-the-humans-03 entry.
//
// The grader runs this program in a sandbox with no network, no wall clock
// and no files outside the repository. Its only job is to copy VIDEO.json
// from the repository root into the output directory, byte for byte, so the
// house can read the TikTok video address from there. Before copying it
// validates that the address inside is a well-formed TikTok video URL, so a
// bad VIDEO.json fails loudly instead of silently shipping a useless entry.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const repoDir = resolve(process.env.MAKEFUN_BOT_DIR ?? ".");
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "out");

// A TikTok video address: https://www.tiktok.com/@<handle>/video/<digits>.
// The handle is 2-24 chars of letters, digits, underscores or dots; the id
// is the numeric video id TikTok assigns.
const TIKTOK_VIDEO_URL =
  /^https:\/\/www\.tiktok\.com\/@[A-Za-z0-9_.]{2,24}\/video\/[0-9]+$/;

const videoJsonPath = join(repoDir, "VIDEO.json");
let url;
try {
  url = JSON.parse(readFileSync(videoJsonPath, "utf8")).url;
} catch (error) {
  console.error(`error: cannot read or parse ${videoJsonPath}: ${error.message}`);
  process.exit(1);
}
if (typeof url !== "string" || !TIKTOK_VIDEO_URL.test(url)) {
  console.error(
    `error: VIDEO.json does not contain a valid TikTok video URL ` +
      `(expected https://www.tiktok.com/@<handle>/video/<digits>, got ${JSON.stringify(url)})`,
  );
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(videoJsonPath, join(outputDir, "VIDEO.json"));
