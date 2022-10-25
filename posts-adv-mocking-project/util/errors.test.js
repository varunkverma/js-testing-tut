import { describe, it, expect } from "vitest";

import { HttpError, ValidationError } from "./errors";

describe("HttpError class", () => {
  it("should contain the provided static code, message and data", () => {
    const testStatus = 1;
    const testMessage = "Test";
    const testData = { key: "test" };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  it("should contain undefined data, if no data is provided", () => {
    const testStatus = 1;
    const testMessage = "Test";
    // const testData = { key: "test" };

    const testError = new HttpError(testStatus, testMessage);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  });
});

describe("ValidationError class", () => {
  it("should contain the providd message", () => {
    const testMessage = "test";

    const testError = new ValidationError(testMessage);

    expect(testError.message).toBe(testMessage);
  });
});
