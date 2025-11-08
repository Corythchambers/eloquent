import { jest } from "@jest/globals";
import { loop } from "../../src/chapter5/Loop";

test("simple count function", () => {
  const output = [];
  loop(
    3,
    (n) => n > 0,
    (n) => n - 1,
    (n) => output.push(n)
  );
  expect(output).toEqual([3, 2, 1]);
});

test("stops immediately if test() fails", () => {
  const output = [];
  loop(
    0,
    (n) => n > 0,
    (n) => n - 1,
    (n) => output.push(n)
  );
  expect(output).toEqual([]);
});

test("can count up as well as down", () => {
  const output = [];
  loop(
    1,
    (n) => n <= 3,
    (n) => n + 1,
    (n) => output.push(n)
  );

  expect(output).toEqual([1, 2, 3]);
});

test("works correctly with side effects (mocked body)", () => {
  const body = jest.fn();
  loop(
    3,
    (n) => n > 0,
    (n) => n - 1,
    body
  );

  expect(body).toHaveBeenCalledTimes(3);
  expect(body).toHaveBeenNthCalledWith(1, 3);
  expect(body).toHaveBeenNthCalledWith(2, 2);
  expect(body).toHaveBeenNthCalledWith(3, 1);
});
