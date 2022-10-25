import { it, expect } from "vitest";

import { validateNotEmpty } from "./validation";

it("should throw an error if an empty string is provided as a value", () => {
  const testInput = "";

  const validateFn = () => validateNotEmpty(testInput);

  expect(validateFn).toThrow();
});

it("should throw an error if a string containing just whitespaces is provided as a value", () => {
  const testInput = "  ";

  const validateFn = () => validateNotEmpty(testInput);

  expect(validateFn).toThrow();
});

it("should throw an error with the provided error message", () => {
  const testInput = "";
  const testErrorMsg = "invalid text";

  const validateFn = () => validateNotEmpty(testInput, testErrorMsg);

  expect(validateFn).toThrow(testErrorMsg);
});
