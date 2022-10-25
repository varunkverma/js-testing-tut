import { describe, expect, it, beforeEach } from "vitest";

import { extractPostData } from "./posts";

const testTitle = "Test Title";
const testContent = "Test content";
let testFormData;

beforeEach(() => {
  testFormData = {
    title: testTitle,
    content: testContent,
    get(identifier) {
      return this[identifier];
    },
  };
});

describe("extractPostData()", () => {
  it("should extract title and content from the provided form data", () => {
    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
