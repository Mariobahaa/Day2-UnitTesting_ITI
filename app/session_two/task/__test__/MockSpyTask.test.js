import sumFunction from "..";
// test that sum function is calling incrementByOne and getPositive correctly
// define your inputs and mock functions used inside sum function
// assert that incrementByOne is called twice
// assert that getPositive is called
describe("sum function", () => {
  test("sum function should call incrementByOne and getPositive", () => {
    const inc = jest.fn(() => 1);
    const gp = jest.fn(() => [1,2,3]);
    const x = sumFunction([1,2,3],gp,inc);
    //expect(sumFunction([1,2,3],gp,inc)).toEqual(7);
    expect(gp).toHaveBeenCalled();
    expect(inc).toHaveBeenCalledTimes(2);
  });
});
