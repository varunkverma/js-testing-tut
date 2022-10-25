import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writeFile method", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  //   expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  // above doesn't work
  writeData(testData, testFileName);

  //   expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});

it("should return a proimse that should be resolved to no value if called correctly", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  // above doesn't work
  writeData(testData, testFileName);

  //   expect(fs.writeFile).toBeCalled();
  //   expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});
