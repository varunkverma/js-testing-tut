import { it, expect, vi, beforeEach } from "vitest";
import { Window } from "happy-dom";
import fs from "fs";
import path from "path";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

//  created emulated browser
const window = new Window();
const document = window.document;

// document.write(htmlDocContent); // load html doc into the virtual dom

vi.stubGlobal("document", document); // gloal stub

beforeEach(() => {
  document.body.innerHTML = ""; // clearingg the content of document, else the htmlDocContent will just get appended
  document.write(htmlDocContent); // load html doc into the virtual dom
});

it('should add a paragraph HTML element in the div with id="error"', () => {
  showError("testing");

  const errorsElement = document.getElementById("errors");
  const errorParagraph = errorsElement.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});

it("should not contain an error paragraph initially", () => {
  const errorsElement = document.getElementById("errors");
  const errorParagraph = errorsElement.firstElementChild;

  expect(errorParagraph).toBeNull();
});

it("should output the provided message in the error paragraph", () => {
  const testErrorMsg = "Testing";

  showError(testErrorMsg);

  const errorsElement = document.getElementById("errors");
  const errorParagraph = errorsElement.firstElementChild;

  expect(errorParagraph.textContent).toBe(testErrorMsg);
});
