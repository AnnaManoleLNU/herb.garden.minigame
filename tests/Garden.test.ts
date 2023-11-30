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
  test("should spawn Thyme in the constructor", () => { 
    expect(HerbModule.Herb).toHaveBeenCalledWith(HerbModule.HerbName.Thyme, HerbModule.WateringNeeds.Low, HerbModule.OptimalHarvestingTime.Day2)
  })

  test("should spawn Basil in the constructor", () => {
    expect(HerbModule.Herb).toHaveBeenCalledWith(HerbModule.HerbName.Basil, HerbModule.WateringNeeds.Medium, HerbModule.OptimalHarvestingTime.Day3)
})

  test("should spawn Rosemary in the constructor", () => {
    expect(HerbModule.Herb).toHaveBeenCalledWith(HerbModule.HerbName.Rosemary, HerbModule.WateringNeeds.High, HerbModule.OptimalHarvestingTime.Day4)
  })
  
  test("should spawn 6 herbs in the constructor", () => {
    expect(HerbModule.Herb).toHaveBeenCalledTimes(6)
  })

  test("herbs of the same name should sit next to each other", () => {
    for (let i = 0; i < 6; i += 2) {
      expect(garden.herbs[i].name).toEqual(garden.herbs[i + 1].name)
    }
  })
})
