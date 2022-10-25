import { it, expect, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should transform a numeric string to a number", () => {
    const num = "10";
    const expectedNum = 10;

    const actualRes = transformToNumber(num);

    expect(actualRes).toBe(expectedNum);
  });

  it("should yield a number, even if a number is passed", () => {
    const num = 10;
    const expectedNum = 10;

    const actualRes = transformToNumber(num);

    expect(actualRes).toBe(expectedNum);
  });

  it("should yiekd NaN, if a non-numeric value is passed", () => {
    const num = "A";
    const num2 = {};

    let res = transformToNumber(num);
    expect(res).toBeNaN();

    res = transformToNumber(num2);
    expect(res).toBeNaN();
  });

  it("should return a value with type number", () => {
    const num = "A";

    const res = transformToNumber(num);

    expect(res).toBeTypeOf("number"); // though NaN is also of type Number
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNums = cleanNumbers(numberValues);

    // expect(cleanedNums[0]).toBeTypeOf("number");
    expect(cleanedNums).toEqual([1, 2]);
  });

  it("should throw a 'Invalid input - must not be empty.' error if an array of empty string value(s) is provided", () => {
    const numberValues = ["1", ""];

    const cleanedNumsFn = () => {
      cleanNumbers(numberValues);
    };

    expect(cleanedNumsFn).toThrow(/Invalid input - must not be empty./);
  });

  it("should throw a 'Invalid number input.' error if an array of non numeric string value(s) is provided", () => {
    const numberValues = ["1", "abc"];

    const cleanedNumsFn = () => {
      cleanNumbers(numberValues);
    };

    expect(cleanedNumsFn).toThrow(/Invalid number input./);
  });

  it("should throw an error if an array which contains a number type value(s) is provided", () => {
    const numberValues = ["1", 2];

    const cleanedNumsFn = () => {
      cleanNumbers(numberValues);
    };

    expect(cleanedNumsFn).toThrow();
  });
});
