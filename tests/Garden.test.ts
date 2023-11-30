import { Garden } from '../src/Garden.ts'
import * as HerbModule from '../src/Herb.ts'

let garden: Garden

beforeEach(() => {
  jest.clearAllMocks()
  garden = new Garden()
})

jest.mock('../src/Herb.ts', () => {
  return {
    Herb: jest.fn().mockImplementation((name, wateringNeeds, optimalHarvestingTime) => ({
      name,
      wateringNeeds,
      optimalHarvestingTime,
    })),
    HerbName: jest.requireActual('../src/Herb.ts').HerbName,
    WateringNeeds: jest.requireActual('../src/Herb.ts').WateringNeeds,
    OptimalHarvestingTime: jest.requireActual('../src/Herb.ts').OptimalHarvestingTime,
  }
})

describe("Garden class", () => {
  spawnHerbTest(HerbModule.HerbName.Thyme, HerbModule.HerbName.Thyme, HerbModule.WateringNeeds.Low, HerbModule.OptimalHarvestingTime.Day2)

  spawnHerbTest(HerbModule.HerbName.Basil, HerbModule.HerbName.Basil, HerbModule.WateringNeeds.Medium, HerbModule.OptimalHarvestingTime.Day3)

  spawnHerbTest(HerbModule.HerbName.Rosemary, HerbModule.HerbName.Rosemary, HerbModule.WateringNeeds.High, HerbModule.OptimalHarvestingTime.Day4)

  test("should not allow to spawn illegal herb", () => {
    expect(() => garden.spawnHerb("Herb" as HerbModule.HerbName)).toThrow("Illegal herb name")
  })

  test("should spawn Thyme in the constructor", () => { 
    expect(HerbModule.Herb).toHaveBeenCalledWith(HerbModule.HerbName.Thyme, HerbModule.WateringNeeds.Low, HerbModule.OptimalHarvestingTime.Day2)
  })

})

function spawnHerbTest(herbName: HerbModule.HerbName, expectedName: HerbModule.HerbName, expectedWateringNeeds: HerbModule.WateringNeeds, expectedOptimalHarvestingTime: HerbModule.OptimalHarvestingTime) {
  test(`should spawn ${expectedName} with watering needs ${expectedWateringNeeds} and optimal harvesting time day ${expectedOptimalHarvestingTime}`, () => {
    garden.spawnHerb(herbName)
    expect(HerbModule.Herb).toHaveBeenCalledWith(expectedName, expectedWateringNeeds, expectedOptimalHarvestingTime)
  })
}
