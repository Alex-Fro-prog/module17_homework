const revertString = require('./revertString');

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("example")).toBe("elpmaxe"));
  it("should reverse string", () => expect(revertString("level")).toBe("level"));
});