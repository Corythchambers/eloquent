import { Group } from "../../src/chapter6/Groups";
import { jest } from "@jest/globals";

test("should have value", () => {
  let group = Group.from([10, 20]);

  expect(group.has(10)).toBe(true);
});

test("should not have value", () => {
  let group = Group.from([10, 20]);

  expect(group.has(30)).toBe(false);
});

test("should add value", () => {
  let group = Group.from([10, 20]);

  group.add(40);
  expect(group.has(40)).toBe(true);
});

test("should not existing value", () => {
  let group = Group.from([10, 20]);

  group.add(10);
  expect(group.has(10)).toBe(true);
});

test("should remove value", () => {
  let group = Group.from([10, 20]);

  group.delete(20);
  expect(group.has(20)).toBe(false);
});
