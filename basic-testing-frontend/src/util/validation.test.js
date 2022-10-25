import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateNumber()", () => {
  // all the tests for this test suite
  it("should not throw error, in case a valid number is passed", () => {
    const num = 1;

    const fun = () => {
      validateNumber(num);
    };

    expect(fun).not.toThrow();
  });

  it("should throw error with string 'Invalid number input.' in case a non-number is passed", () => {
    const num = "1";

    const fun = () => {
      validateNumber(num);
    };

    expect(fun).toThrow(/Invalid number input./);
  });
}); //describe the unit

describe("validateStringNotEmpty()", () => {
  // all the tests for this test suite
  it("should accept a non-zero length string and not throw error", () => {
    const str = "  Hellowwaad  ";
    const fun = () => {
      validateStringNotEmpty(str);
    };
    expect(fun).not.toThrow();
  });

  it("should throw an error with string 'Invalid input - must not be empty.' when an empty string or a string with just white spaces is passed", () => {
    let str = "  ";
    let fun = () => {
      validateStringNotEmpty(str);
    };
    expect(fun).toThrow("Invalid input - must not be empty.");

    str = "";
    fun = () => {
      validateStringNotEmpty(str);
    };
    expect(fun).toThrow("Invalid input - must not be empty.");
  });

  it("should throw an error with string '' when a non-string type value is passed", () => {
    let str = 123;
    let fun = () => {
      validateStringNotEmpty(str);
    };
    expect(fun).not.toThrow(/TypeError/);
  });
}); //describe the unit

// nested describes are possible
