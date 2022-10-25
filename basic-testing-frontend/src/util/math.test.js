import { it, expect } from "vitest";

import { add } from "../math";

// it and test are synoniums

// // Bad way of defining test
// it("should summarize all number values in an array", () => {
//   const actualRes = add([1, 2, 3]);

//   expect(actualRes).toBe(6);
// });

// Test following AAA(Arange Act Assert) patterns
it("should summarize all number values in an array", () => {
  // Arrange - Arrange i/p and o/p values
  const numbers = [1, 2, 3];

  // Act - run the actual unit to be tested
  const actualRes = add(numbers);

  // Assert - Check for expected result
  const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);
  expect(actualRes).toBe(expectedResult);
});

it("should yield NaN, if alteast one invalid number is provided", () => {
  const numbers = ["as", 1, 2, "as"];

  const actualRes = add(numbers);

  expect(actualRes).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];

  const actualRes = add(numbers);

  const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0);
  expect(actualRes).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];

  const actualRes = add(numbers);

  const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);
  expect(actualRes).toBe(expectedResult);
});

it("should throw error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
