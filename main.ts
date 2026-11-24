import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The server crashed while saving your file. Your work is safe, the server is not. Wait 30 seconds and try again.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error("entry must be 1-200 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
