import {
  it,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  afterAll,
  describe,
} from "vitest";

import { User } from "./hooks";

let testEmail; // global declaration to avoid code repetition,
// const user = new User(testEmail); // bad, tests are changing this value
let user;

// beforeAll(() => {
//   testEmail = "test@test.com";
//   console.log("Before All");
// });
// beforeEach(() => {
//   user = new User(testEmail);
//   console.log("Before Each");
// });
// afterEach(() => {
//   console.log("After Each");
// });
// afterAll(() => {
//   console.log("After All");
// });

// it.concurrent("should update the email", () => {
//   const newTestEmail = "test2@test.com";

//   user.updateEmail(newTestEmail);

//   expect(user.email).toBe(newTestEmail);
// });

// it.concurrent("should have an email property", () => {
//   expect(user).toHaveProperty("email");
// });

// it.concurrent("should store the provided email value", () => {
//   expect(user.email).toBe(testEmail);
// });

// it.concurrent("should clear the email", () => {
//   user.clearEmail();

//   expect(user.email).toBe("");
// });

// // to run test concurrently
// it.concurrent(
//   "should still have an email property after clearing the email",
//   () => {
//     user.clearEmail();

//     expect(user).toHaveProperty("email");
//   }
// );

describe.concurrent("all test here run concurrently", () => {
  let testEmail; // global declaration to avoid code repetition,
  // const user = new User(testEmail); // bad, tests are changing this value
  let user;
  beforeAll(() => {
    testEmail = "test@test.com";
    console.log("Before All");
  });
  beforeEach(() => {
    user = new User(testEmail);
    console.log("Before Each");
  });
  afterEach(() => {
    console.log("After Each");
  });
  afterAll(() => {
    console.log("After All");
  });
  it("should update the email", () => {
    const newTestEmail = "test2@test.com";

    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
  });

  it("should have an email property", () => {
    expect(user).toHaveProperty("email");
  });

  it("should store the provided email value", () => {
    expect(user.email).toBe(testEmail);
  });

  it("should clear the email", () => {
    user.clearEmail();

    expect(user.email).toBe("");
  });

  // to run test concurrently
  it("should still have an email property after clearing the email", () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  });
});
