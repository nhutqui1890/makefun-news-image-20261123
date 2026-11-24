// News-image entry for make.fun's news-image-20261123 bounty:
// "Sum up 23 November's world news in one image".
//
// The program writes the entry's image to /output/entry.png. The image is a
// newspaper front page for Monday 23 November 2026: the lead story is
// Ukraine's sea drones sinking a Russian warship off Libya, with Nvidia,
// COP31, Iran sanctions and the Belgium strike in the grid below, and three
// more stories in the ticker. It was composed for this competition from
// illustrations drawn for it plus typeset headlines, so every word is crisp.
//
// The grader runs this twice with no network and both runs must write the
// same bytes, so the program only copies a fixed file and checks it first:
// a whole PNG, at most 1 MiB, at most 1024 by 1024 pixels.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1048576; // the gate: at most 1 MiB
const MAX_SIDE = 1024; // the gate: at most 1024 by 1024 pixels

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

// Fail loudly on a broken snapshot instead of shipping a bad file.
const bytes = readFileSync(source);
if (bytes.length < 33 || !bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a whole PNG file');
}
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB gate`);
}
// The IHDR chunk holds the width and height as big-endian uint32s.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);
