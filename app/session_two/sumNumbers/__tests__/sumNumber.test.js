import { getPizzas } from "../index";

describe("get pizza", () => {
  test("should call calc function and my Recipes func", () => {
    const input1 = 1;
    const input2 = 2;
    const input3 = jest.fn();
    const input4 = jest.fn(() => [1, 2, 3]);

    // const output  ==> no output returns so we don't need it

    getPizzas(input1, input2, input3, input4);
    expect(input4).toHaveBeenCalled();
    expect(input4).toHaveBeenCalledTimes(1);
    expect(input3).toHaveBeenCalledWith(input1 + input2);
  });
});
