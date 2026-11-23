// The World Today: 36 Stories from Monday 23 November 2026.
// Entry point for the make.fun contest "Sum up 23 November's world news in
// one image". The front page is pre-rendered (index.html -> entry.png); this
// script copies the finished image to the make.fun output directory.
// It resolves the image relative to this file, not the working directory,
// so it works no matter where the grader runs it from. It fails loudly if
// the pre-rendered image is missing instead of writing a broken entry.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error("entry.png not found next to main.ts: " + source);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
copyFileSync(source, target);
console.log("wrote " + target);
