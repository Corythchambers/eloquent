import { everything } from "../../src/chapter5/Everything";
import { jest } from "@jest/globals";

test("All less than 10 true", () => {
  let array = [1, 3, 5];
  expect(everything(array, (n) => n < 10)).toBe(true);
});

test("All less than 10 false", () => {
  let array = [2, 4, 16];
  expect(everything(array, (n) => n < 10)).toBe(false);
});

test("Empty array", () => {
  let array = [];
  expect(everything(array, (n) => n < 10)).toBe(true);
});
