import { Garden } from '../src/Garden.ts'
import * as HerbModule from '../src/Herb.ts'

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
test("should spawn Thyme with watering needs low and optimal harvesting time day 2", () => {
    // Arrange
  const expectedName = HerbModule.HerbName.Thyme
  const expectedWateringNeeds = 1
  const expectedOptimalHarvestingTime = 2
  const garden = new Garden([])

  // Act
  garden.spawnThyme()

  // Assert
  expect(HerbModule.Herb).toHaveBeenCalledWith(expectedName, expectedWateringNeeds, expectedOptimalHarvestingTime)
  })
})


