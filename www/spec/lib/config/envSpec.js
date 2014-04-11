'use strict';

describe("Configuration of the environment", function () {
  it("should use test environement", function () {
    expect(process.env.NODE_ENV).toBe("test");
  });
});
