// One Line, One Laugh: Roast Your Fridge
// Writes a single-line roast of a fridge to /output/entry.txt.
// Deterministic: same output on every run, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge's ice maker groans like a ghost with a grudge at 3 a.m., then drops three cubes and clocks out like it just finished a double shift.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
