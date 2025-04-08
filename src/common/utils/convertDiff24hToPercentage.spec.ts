import { convertDiff24hToPercentage } from "./convertDiff24hToPercentage";

describe("convertDiff24hToPercentage", () => {
  it("should return 0 when rate and diff24h are equal", () => {
    const result = convertDiff24hToPercentage({ rate: 100, diff24h: 100 });
    expect(result).toBe(0);
  });

  it("should return 0 when rate and diff24h are almost equal", () => {
    const result = convertDiff24hToPercentage({
      rate: 100.0000000001,
      diff24h: 100.0000000001,
    });
    expect(result).toBe(0);
  });

  it("should calculate percentage correctly for positive values", () => {
    const rate = 105.123456;
    const diff24h = 2.839629;

    const result = convertDiff24hToPercentage({ rate, diff24h });
    expect(result).toBe(2.78);
  });

  it("should calculate percentage correctly for negative diff24h", () => {
    const rate = 100;
    const diff24h = -5;

    const result = convertDiff24hToPercentage({ rate, diff24h });
    expect(result).toBe(-4.76);
  });

  it("should handle very small rate values", () => {
    const rate = 0.000001;
    const diff24h = 0.0000001;

    const result = convertDiff24hToPercentage({ rate, diff24h });
    expect(result).toBe(11.11);
  });

  it("should handle large rate values", () => {
    const rate = 1e12;
    const diff24h = 1e10;

    const result = convertDiff24hToPercentage({ rate, diff24h });
    expect(result).toBe(1.01);
  });
});
