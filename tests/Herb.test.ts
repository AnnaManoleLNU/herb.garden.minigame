import { Herb, HerbName, WateringNeeds, OptimalHarvestingTime } from "../src/Herb"

describe("Herb class with valid enum values", () => {
  test("should create a Herb instance with valid enum values", () => {
    expect(() => new Herb(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3)).not.toThrow();
  })
})

describe("Herb class with valid getters", () => {
  testName(HerbName.Basil, "Basil");
  testName(HerbName.Rosemary, "Rosemary");
  testName(HerbName.Thyme, "Thyme");

  testWateringNeeds(HerbName.Thyme, WateringNeeds.Low, 1);
  testWateringNeeds(HerbName.Thyme, WateringNeeds.Medium, 2);
  testWateringNeeds(HerbName.Thyme, WateringNeeds.High, 3);

  testOptimalHarvestingTime(HerbName.Thyme, OptimalHarvestingTime.Day2, 2);
  testOptimalHarvestingTime(HerbName.Thyme, OptimalHarvestingTime.Day3, 3);
  testOptimalHarvestingTime(HerbName.Thyme, OptimalHarvestingTime.Day4, 4);
  testOptimalHarvestingTime(HerbName.Thyme, OptimalHarvestingTime.Day5, 5);
})

function testName(herbName: HerbName, expectedName: string) {
  test(`should get the name of ${expectedName}`, () => {
    const herb = new Herb(herbName, WateringNeeds.Medium, OptimalHarvestingTime.Day3);
    expect(herb.name).toBe(expectedName);
  })
}

function testWateringNeeds(herbName: HerbName, wateringNeeds: WateringNeeds, expectedWateringNeeds: number) {
  test(`should get the ${wateringNeeds === WateringNeeds.Low ? 'low' : 'medium'} watering needs for ${herbName}`, () => {
    const herb = new Herb(herbName, wateringNeeds, OptimalHarvestingTime.Day2)
    expect(herb.wateringNeeds).toBe(expectedWateringNeeds)
  })
}

function testOptimalHarvestingTime(herbName: HerbName, optimalHarvestingTime: OptimalHarvestingTime, expectedOptimalHarvestingTime: number) {
  test(`should get the optimal harvesting time of ${expectedOptimalHarvestingTime} days for ${herbName}`, () => {
    const herb = new Herb(herbName, WateringNeeds.Low, optimalHarvestingTime)
    expect(herb.optimalHarvestingTime).toBe(expectedOptimalHarvestingTime)
  })
}
