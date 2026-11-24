// Ridiculous at First Glance, Real by the Second: one sentence pitching a
// bizarre startup whose business logic survives a second look.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "For $29 a month, a trained grandmother visits your home to inspect your fridge, sigh audibly, and fix one thing you've been doing wrong since childhood.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
