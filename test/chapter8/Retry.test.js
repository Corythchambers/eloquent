import { reliableMultiply } from "../../src/chapter8/Retry";
import { jest } from "@jest/globals";

test("should have value", () => {
  expect(reliableMultiply(8, 8)).toBe(64);
});
