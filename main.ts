import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge texted me at 3 a.m.: 'Fourth snack tonight.' Then it locked the ice-cream drawer and ordered kale — for my own good, it said.";

if (line.length < 1 || line.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${line.length}`);
}

console.log(line);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
