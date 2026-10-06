import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert 08:00 to morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("correctly convert 23:00 to evening time", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("correctly convert 15:30 to afternoon time", function () {
  assert.equal(formatAs12HourClock("15:30"), "03:30 pm");
});

test("correctly convert 12:10 to 10 past noon time", function () {
  assert.equal(formatAs12HourClock("12:10"), "12:10 pm");
});

test("correctly convert 12:00 to exactly noon time", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("correctly convert 08:45 to morning time", function () {
  assert.equal(formatAs12HourClock("08:45"), "08:45 am");
});

test("correctly convert 09:05 to morning time", function () {
  assert.equal(formatAs12HourClock("09:05"), "09:05 am");
});

test("correctly convert 17:45 to evening time", function () {
  assert.equal(formatAs12HourClock("17:45"), "05:45 pm");
});

test("correctly convert midnight 00:00", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("correctly convert 11:59 to late morning time", function () {
  assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});

test("correctly convert 23:59 to late night time", function () {
  assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});
