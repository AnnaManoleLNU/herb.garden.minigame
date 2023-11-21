import { Herb, HerbName, WateringNeeds, OptimalHarvestingTime } from "../src/Herb"

describe("Herb class with valid enum values", () => {
  test("should create a Herb instance with valid enum values", () => {
    expect(() => new Herb(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3)).not.toThrow();
  })
})

describe("Herb class with valid getters", () => {
  test("should get the name of the herb", () => {
    const herb = new Herb(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3)
    expect(herb.getName()).toBe("Basil")
  })
})
