import { Herb, HerbName, WateringNeeds, OptimalHarvestingTime } from "../src/Herb"

describe("Herb class with valid enum values", () => {
  test("should create a Herb instance with valid enum values", () => {
    expect(() => new Herb(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3)).not.toThrow();
  })
})

describe("Herb class with valid getters", () => {
  test("should get the name of another herb", () => {
    testNames(HerbName.Rosemary, WateringNeeds.Medium, OptimalHarvestingTime.Day3, "Rosemary")
  })

  test("should get the name of the herb", () => {
    testNames(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3, "Basil")
  })

  test("should get the watering needs of the herb", () => {
    const herb = new Herb(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3)
    expect(herb.wateringNeeds).toBe(2)
  })
})

function testNames(herbName: HerbName, wateringNeeds: WateringNeeds, optimalHarvestingTime: OptimalHarvestingTime, expectedName: String) {
  const herb = new Herb(herbName, wateringNeeds, optimalHarvestingTime, )
  expect(herb.name).toBe(expectedName)
}
