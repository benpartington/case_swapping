const swap = require("./swap");

describe("swap", () => {
  it("swaps case of a letter in string", () => {
    expect(swap('a')).toBe('A');
  });

  it("swaps case of different letter in string", () => {
    expect(swap('b')).toBe('B');
  });

  

});

