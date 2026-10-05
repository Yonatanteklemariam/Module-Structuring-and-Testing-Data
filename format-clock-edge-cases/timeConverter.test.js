import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

const cases = [
  ["08:00", "08:00 AM"],
  ["23:00", "11:00 PM"],
  ["15:30", "03:30 PM"],
  ["12:10", "12:10 PM"],
  ["08:45", "08:45 AM"],
  ["09:05", "09:05 AM"],
  ["17:45", "05:45 PM"],
  ["00:00", "12:00 AM"],
  ["11:59", "11:59 AM"],
  ["23:59", "11:59 PM"],
];

cases.forEach(([input, expected]) => {
  const output = formatAs12HourClock(input);
  if (output === expected) {
    console.log(`✅ ${input} → returned "${output}"`);
  } else {
    console.error(`❌ ${input} → returned "${output}", expected "${expected}"`);
  }
});
