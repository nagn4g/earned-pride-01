import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry is a single, fixed line of prose. It is written verbatim: no
// trimming, reformatting, or added punctuation. The line itself is the entry,
// so any change to it would change what is being submitted.
const LINE =
  "After three years of night shifts, she finally held the keys to the bakery she used to clean at dawn.";

// Competition limit for the entry text, in UTF-16 code units as measured by
// JavaScript string length (the line is ASCII, so this equals its character
// count and its UTF-8 byte count).
const MAX_LENGTH = 240;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validateLine(line: string): void {
  if (line.length === 0) {
    fail("entry line must not be empty");
  }

  // The entry must be exactly one line, so any embedded line break is a
  // submission-breaking defect rather than a formatting quirk.
  if (/[\r\n]/.test(line)) {
    fail("entry line must not contain newline characters (\\n or \\r); the entry must be exactly one line");
  }

  if (line.trim().length === 0) {
    fail("entry line must not be only whitespace");
  }

  if (line.length > MAX_LENGTH) {
    fail(`entry line must be at most ${MAX_LENGTH} characters (got ${line.length})`);
  }
}

// Validate before touching the filesystem so a bad entry never produces a file.
validateLine(LINE);

// The grader supplies OUTPUT_DIR; fall back to /output for local runs.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

try {
  mkdirSync(outputDir, { recursive: true });
  // UTF-8 with no trailing newline: write the line bytes exactly once.
  writeFileSync(outputPath, LINE, { encoding: "utf8" });
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  fail(`could not write ${outputPath}: ${reason}`);
}

console.log(`wrote ${LINE.length} characters to ${outputPath}`);
