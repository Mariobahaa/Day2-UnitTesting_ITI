import { checkIfString } from "../index";

describe("check equality", () => {
  test("should return true if got string", () => {
    expect(checkIfString("hamada")).toBeTruthy();
    expect(checkIfString(1)).toBeFalsy();
  });

  //   test("", () => {});
});
