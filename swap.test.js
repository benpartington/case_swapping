const swap = require("./swap");

describe("swap", () => {
  it("swaps case of letters in string", () => {
    expect(swap('a')).toBe('A');
  });
  
});

