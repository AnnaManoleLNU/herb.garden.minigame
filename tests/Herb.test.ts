import { Herb, HerbName, WateringNeeds, OptimalHarvestingTime } from "../src/Herb"

describe("Herb class with valid enum values", () => {
  test("should create a Herb instance with valid enum values", () => {
    expect(() => new Herb(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3)).not.toThrow()
  })
})

describe("Herb class with valid getters", () => {
  testName(HerbName.Basil, "Basil")
  testName(HerbName.Rosemary, "Rosemary")
  testName(HerbName.Thyme, "Thyme")

  testWateringNeeds(HerbName.Thyme, WateringNeeds.Low, 1)
  testWateringNeeds(HerbName.Thyme, WateringNeeds.Medium, 2)
  testWateringNeeds(HerbName.Thyme, WateringNeeds.High, 3)

  testOptimalHarvestingTime(HerbName.Thyme, OptimalHarvestingTime.Day2, 2)
  testOptimalHarvestingTime(HerbName.Thyme, OptimalHarvestingTime.Day3, 3)
  testOptimalHarvestingTime(HerbName.Thyme, OptimalHarvestingTime.Day4, 4)
  testOptimalHarvestingTime(HerbName.Thyme, OptimalHarvestingTime.Day5, 5)
})

describe("Herb quality", () => {
  test("should get the quality of a new herb", () => {
    const herb = new Herb(HerbName.Thyme, WateringNeeds.Low, OptimalHarvestingTime.Day2)
    expect(herb.quality).toBe(0)
  })

  test("herb quality should be set to a value", () => {
    testQuality(HerbName.Thyme, 1, 1)
  })

  test("herb quality should be set to 0 if a negative value is passed", () => {
    testQuality(HerbName.Thyme, -1, 0)
  })

  test("herb quality should be set to 3 if a value greater than 3 is passed", () => {
    testQuality(HerbName.Thyme, 4, 3)
  })
})

describe("Herb watering", () => {
  test("the amount of times a new herb has been watered should be 0", () => {
    const herb = new Herb(HerbName.Thyme, WateringNeeds.Low, OptimalHarvestingTime.Day2)
    expect(herb.timesWatered).toBe(0)
  })

  test("watering should increase the amount of times a herb has been watered by 1", () => {  
    const herb = new Herb(HerbName.Thyme, WateringNeeds.Low, OptimalHarvestingTime.Day2)
    herb.water()
    expect(herb.timesWatered).toBe(1)
  })

  test("if a herb has watering needs of 1, watering it 1 time should make its quality 3", () => {
    testWatering(HerbName.Thyme, WateringNeeds.Low, 1, 3)
  })

  test("if a herb has watering needs of 2, watering it 1 time should make its quality 2", () => {
    testWatering(HerbName.Thyme, WateringNeeds.Medium, 1, 2)
  })

  test("if a herb has watering needs of 3, watering it 1 time should make its quality 1", () => {
    testWatering(HerbName.Thyme, WateringNeeds.High, 1, 1)
  })

  test("if a herb has watering needs of 1, watering it 2 times should make its quality 2", () => {
    testWatering(HerbName.Thyme, WateringNeeds.Low, 2, 2)
  })

  test("if a herb has watering needs of 2, watering it 2 times should make its quality 3", () => {
    testWatering(HerbName.Thyme, WateringNeeds.Medium, 2, 3)
  })

  test("if a herb has watering needs of 3, watering it 2 times should make its quality 2", () => {
    testWatering(HerbName.Thyme, WateringNeeds.High, 2, 2)
  })

  test("if a herb has watering needs of 1, watering it 3 times should make its quality 1", () => {
    testWatering(HerbName.Thyme, WateringNeeds.Low, 3, 1)
  })
})

function testName(herbName: HerbName, expectedName: string) {
  test(`should get the name of ${expectedName}`, () => {
    const herb = new Herb(herbName, WateringNeeds.Medium, OptimalHarvestingTime.Day3);
    expect(herb.name).toBe(expectedName)
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

function testQuality(herbName: HerbName, quality: number, expectedQuality: number) {
    const herb = new Herb(herbName, WateringNeeds.Low, OptimalHarvestingTime.Day2)
    herb.quality = quality
    expect(herb.quality).toBe(expectedQuality)
}

function testWatering(herbName: HerbName, wateringNeeds: WateringNeeds, wateringAmount: number, expectedQuality: number) {
  const herb = new Herb(herbName, wateringNeeds, OptimalHarvestingTime.Day2)
  for (let i = 0; i < wateringAmount; i++) {
    herb.water()
  }
  expect(herb.quality).toBe(expectedQuality)
}