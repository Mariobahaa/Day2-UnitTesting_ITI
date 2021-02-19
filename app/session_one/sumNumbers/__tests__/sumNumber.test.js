import { sum, getPizzas } from "../index";

describe("Sum Numbers", () => {
  test("should sum two numbers", () => {
    const input1 = 3;
    const input2 = 5;
    const expectedOutput = 8;
    //  expect( myFunction with inputs ).(assertionFunction)
    expect(sum(input1, input2)).toBe(expectedOutput);
  });

  test("should return not string handled error if got string input", () => {
    const input1 = "text";
    const input2 = 5;
    const output = "no string inputs are allowed";
    expect(sum(input1, input2)).toEqual(output);
  });
});

// sum ==> 1 (input1), 2 (input2) ----> 3 (output)
// sum(1,2) --> 3

describe("get pizza", () => {
  test("should call calc function and my Recipes func", () => {
    const input1 = 1;
    const input2 = 2;
    const input3 = jest.fn();
    const input4 = jest.fn(() => [1, 2, 3, 4]);

    // const output  ==> no output returns so we don't need it

    getPizzas(input1, input2, input3, input4);
    expect(input4).toHaveBeenCalled();
    expect(input4).toHaveBeenCalledTimes(1);
    expect(input3).toHaveBeenCalledWith(input1 + input2);
  });
});
