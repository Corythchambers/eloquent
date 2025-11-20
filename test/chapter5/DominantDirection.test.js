import { dominantDirection } from "../../src/chapter5/DominantDirection";
import { jest } from "@jest/globals";

test("ltr dominant direction", () => {
  expect(dominantDirection("Hello!")).toEqual("ltr");
});

test("Mixed input with rtl majority", () => {
    expect(dominantDirection("Hey, مساء الخير")).toEqual('rtl');
});
