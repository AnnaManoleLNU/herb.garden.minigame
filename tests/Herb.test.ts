import { Herb, HerbName, WateringNeeds, OptimalHarvestingTime } from "../src/Herb";

describe("Herb class with valid enum values", () => {
  test("should create a Herb instance with valid enum values", () => {
    expect(() => new Herb(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3)).not.toThrow();
  });
});