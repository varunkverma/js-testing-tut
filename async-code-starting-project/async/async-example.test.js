import { it, expect, done } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value", (done) => {
  const testEmail = "test@test.com";

  generateToken(testEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      done();
    } catch (err) {
      done(err);
    }
  });
});

it("should generate a token value, by another way", () => {
  const testEmail = "test@test.com";

  return expect(generateTokenPromise(testEmail)).resolves.toBeDefined();
});

it("should generate a token value, yet by another way again", async () => {
  const testEmail = "test@test.com";

  const token = await generateTokenPromise(testEmail);

  expect(token).toBeDefined();
});
