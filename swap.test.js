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

  it("swaps case of multiple letters", () => {
    expect(swap('Aa')).toBe('aA');
  });

  it("takes integer input", () => {
    expect(swap("1234")).toBe("1234");
  });

});

