describe("mock functions", () => {
  // default jest mock function
  test("mock implementation of a basic function", () => {
    jest.fn();
  });

  // let's mock the return value and test calls

  // const mock = jest.fn();
  // const mock = jest.fn(() => "I am a mock function");
  // mock();
  // mock();
  // expect(mock("Calling my mock function!")).toBe("I am a mock function");
  // expect(mock).toHaveBeenCalledWith("Calling my mock function!");
  // expect(mock).toHaveBeenCalledTimes(2); // we know it's been called two times

  // mock("Hello", "there", "Steve"); // call it with 3 different arguments
  // expect(mock).toHaveBeenCalledWith("Hello", "there", "Steve");

  // mock("Steve"); // called with 1 argument
  // expect(mock).toHaveBeenLastCalledWith("Steve");
});
