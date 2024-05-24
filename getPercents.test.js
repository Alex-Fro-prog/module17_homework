const getPercents = require('./getPercents');

describe("tests for getPercents function", () => {
  it("should get correct percents of correct number", () => expect(getPercents(200, 10)).toBe(20));
  it("should get percent equal 0 of number", () => expect(getPercents(600, 0)).toBe(0));
  it("should get percents of number equal 0", () => expect(getPercents(0, 90)).toBe(0));
});