// news-image-01 entry (Node 22, standard library only).
// The image beside this file sums up Friday 13 November 2026 in four panels:
// Nvidia's CEO resigns, Microsoft 365 goes down worldwide, tankers are hit in
// the Strait of Hormuz, and Europe joins the Ukraine peace talks.
// The program just copies that one image to /output/entry.png, so both runs
// write byte-identical output with no network.
//
// v2: also create the output directory first, so the copy never fails on a
// fresh container where /output (or MAKEFUN_OUTPUT_DIR) does not exist yet.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
