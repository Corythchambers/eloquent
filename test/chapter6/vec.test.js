import { Vec } from "../../src/chapter6/vec";
import { jest } from "@jest/globals";

test("should add vectors", () => {
  let vec1 = new Vec(1, 2);
  let vec2 = new Vec(2, 3);

  let result = vec1.plus(vec2);
  expect(result.x).toBe(3);
  expect(result.y).toBe(5);
});

test("should return difference of vectors", () => {
  let vec1 = new Vec(1, 2);
  let vec2 = new Vec(2, 3);

  let result = vec1.minus(vec2);
  expect(result.x).toBe(-1);
  expect(result.y).toBe(-1);
});

test("should return length", () => {
  let vec1 = new Vec(3, 4);

  expect(vec1.length).toBe(5);
});
