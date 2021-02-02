const models = require("./model.json");
const filterByLocation = require("./index.js");

describe("Function that filter's by location", () => {
  const expected = "Homer Simpson" + "\n" + "Krusty the Clown";
  const unexpectedOutput = "Diane Nguyen" + "\n" + "Frank Reynolds";
  test("It should filter by search term 'Location' and return 'Names' ", () => {
    expect(filterByLocation(models, "Springfield")).toEqual(expected);
  });
  test("Check that it is case insensitive ", () => {
    expect(filterByLocation(models, "SPRINGFIELD")).toMatch(expected);
  });
  test("Ensure output is defined", () => {
    expect(filterByLocation(models, "Springfield")).toBeDefined();
  });

  test("Does not accept invalid input", () => {
    expect(filterByLocation(models, "Philidelphia")).not.toEqual(expected);
  });

  test("Expect output not to be 'Diane Nguyen and Frank Reynolds'", () => {
    expect(filterByLocation(models, "Springfield")).not.toBe(unexpectedOutput);
  });
});
