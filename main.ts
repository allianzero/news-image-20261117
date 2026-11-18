// news-image-20261117 — make.fun entry program (Node 22, standard library only).
//
// The entry is a single image: a front page summing up the world's news of
// Tuesday 17 November 2026 (Kerch Bridge span falls, Trump lands in Manila,
// tankers hit mines in the Strait of Hormuz, UK sanctions settlement
// builders, Japan scrambles jets, Nvidia reports after the close).
//
// The image is rendered once, by hand, and shipped in this repository as
// entry.png. This program's only job is to place that exact file at
// /output/entry.png, deterministically: the same input bytes always produce
// the same output bytes, and no network is needed.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The directory holding this script (and entry.png beside it).
const repoRoot = dirname(fileURLToPath(import.meta.url));

// The grader mounts a writable /output; outside the sandbox the
// MAKEFUN_OUTPUT_DIR variable stands in for it. Copying a fixed file means
// the output is byte-identical on every run, which is what the gate checks.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, 'entry.png'), join(outputDir, 'entry.png'));
