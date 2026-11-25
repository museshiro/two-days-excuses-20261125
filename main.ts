import { mkdirSync, writeFileSync } from "node:fs";

// Two days of excuses — one line, exactly as specified, no trailing newline.
// The output goes only to /output/entry.txt: the grader sandbox is read-only
// elsewhere, so no relative write is attempted here.
const line = "I met the deadline in all 14 simulations. This was the fifteenth.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
