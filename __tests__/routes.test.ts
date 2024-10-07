import { exportForTesting } from "../routes";

const { calculateArrivalDateTime } = exportForTesting;
describe("calculateArrivalDateTime", () => {
  const OriginalDate = Date;
  it("should return the current date if the current time is before 9 AM", () => {
    jest
      .spyOn(global, "Date")
      .mockImplementation((...args) =>
        args.length
          ? new OriginalDate(...args)
          : new OriginalDate("2022-01-31T08:00:00Z")
      );

    const result = calculateArrivalDateTime();
    expect(result.getHours()).toBe(9);
    expect(result.getDate()).toBe(31);
  });

  it("should return the next day if the current time is after 9 AM", () => {
    jest
      .spyOn(global, "Date")
      .mockImplementation((...args) =>
        args.length
          ? new OriginalDate(...args)
          : new OriginalDate("2022-01-31T09:00:00Z")
      );

    const result = calculateArrivalDateTime();
    expect(result.getHours()).toBe(9);
    expect(result.getDate()).toBe(1);
  });
});
