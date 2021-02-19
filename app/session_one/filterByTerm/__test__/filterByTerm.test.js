import { filterByTerm } from "../index";

describe("Filter Function", () => {
  test("it should filter by search term link", () => {
    const input = [
      { id: 1, url: "wwww.domain.com" },
      { id: 2, url: "wwww.link.com" },
      { id: 3, url: "wwww.domain2.com" },
    ];
    const output = [{ id: 2, url: "wwww.link.com" }];

    expect(filterByTerm(input, "link")).toEqual(output);
  });
});
