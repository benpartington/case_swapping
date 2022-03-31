const swap = require("./swap");

describe("swap", () => {
  it("swaps case of a letter in string", () => {
    expect(swap('a')).toBe('A');
  });

  it("swaps case of different letter in string", () => {
    expect(swap('b')).toBe('B');
  });

  it("swaps case of letter from up to down", () => {
    expect(swap('A')).toBe('a');
  });

  it("returns integer input unchanged", () => {
    expect(swap(12345)).toBe(12345);
  });

});

