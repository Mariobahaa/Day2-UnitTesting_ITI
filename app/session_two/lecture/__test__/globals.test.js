import { Pizzas } from "..";

describe("order pizza page", () => {
  // console.log("1");
  // beforeAll(() => {
  //   console.log("this is before all function");
  // });

  // beforeEach(() => {
  //   console.log("this is before each function");
  // });

  // afterAll(() => {
  //   console.log("this is after all function");
  // });

  // afterEach(() => {
  //   console.log("this is after each function");
  // });

  describe("payment", () => {
    // console.log("2");
    test("the pizza data is correct", () => {
      expect(Pizzas).toHaveLength(4);
    });
  });

  describe("calculate quantity", () => {
    // console.log("3");
    test("all pizzas items has quantity property", () => {
      expect(Pizzas.map((pizza) => pizza.name)).toEqual([
        "Chicago Pizza",
        "Neapolitan Pizza",
        "New York Pizza",
        "Sicilian Pizza",
      ]);
    });
  });
});

describe("another describe", () => {
  test("check result is correct", () => {});
  test("check sun positive is correct", () => {});
  test("check sun positive is correct", () => {});
});
