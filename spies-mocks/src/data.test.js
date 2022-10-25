import { describe, expect, it, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    const logger = vi.fn(); //spy func

    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    const logger = vi.fn(); //spy func

    logger.mockImplementation(() => {});

    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
