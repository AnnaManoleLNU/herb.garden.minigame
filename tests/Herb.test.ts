import { Herb, HerbName, WateringNeeds, OptimalHarvestingTime } from "../src/Herb"

describe("Herb class with valid enum values", () => {
  test("should create a Herb instance with valid enum values", () => {
    expect(() => new Herb(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3)).not.toThrow();
  })
})

describe("Herb class with valid getters", () => {
  test("should get the name of Basil", () => {
    testNames(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3, "Basil")
  })

  test("should get the name of Rosemary", () => {
    testNames(HerbName.Rosemary, WateringNeeds.Medium, OptimalHarvestingTime.Day3, "Rosemary")
  })

  test("should get the low watering needs", () => {
    testWateringNeeds(HerbName.Thyme, WateringNeeds.Low, OptimalHarvestingTime.Day2, 1)
  })

  test("should get the medium watering needs", () => {
    testWateringNeeds(HerbName.Thyme, WateringNeeds.Medium, OptimalHarvestingTime.Day2, 2)
  })
})

function testNames(herbName: HerbName, wateringNeeds: WateringNeeds, optimalHarvestingTime: OptimalHarvestingTime, expectedName: String) {
  const herb = new Herb(herbName, wateringNeeds, optimalHarvestingTime, )
  expect(herb.name).toBe(expectedName)
}

function testWateringNeeds(herbName: HerbName, wateringNeeds: WateringNeeds, optimalHarvestingTime: OptimalHarvestingTime, expectedWateringNeeds: WateringNeeds) {
  const herb = new Herb(herbName, wateringNeeds, optimalHarvestingTime, )
  expect(herb.wateringNeeds).toBe(expectedWateringNeeds)
}

