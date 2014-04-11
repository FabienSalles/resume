process.env.NODE_ENV = "test";

require("../../../server.js");

describe("test", function () {
  it("should is in test environment", function () {
    expect(process.env.NODE_ENV).toBe("test");
  });
});
