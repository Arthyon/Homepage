import { getVersion } from "../src/modules/GetVersion";

describe("placeholder tests", () => {
  beforeEach(() => {
    jest.resetModules();
    delete process.env.VERSION;
  });

  test("placeholder test", () => {
    process.env.VERSION = "1.0.0";

    const version = getVersion();

    expect(version).toBe("1.0.0");

  });
});
