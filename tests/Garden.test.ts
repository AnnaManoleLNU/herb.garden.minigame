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
  };
});

let garden: Garden
let herbs: HerbModule.Herb[]

beforeEach(() => {
  jest.clearAllMocks()

  herbs = [
    new HerbModule.Herb(HerbModule.HerbName.Thyme, 1, 2),
    new HerbModule.Herb(HerbModule.HerbName.Basil, 2, 3),
    new HerbModule.Herb(HerbModule.HerbName.Rosemary, 3, 4)
  ]
  garden = new Garden(herbs)
})

describe("Garden class", () => {
  test("should create herbs in constructor", () => {
    expect(HerbModule.Herb).toHaveBeenCalled()
  })

  testHasHerb("Thyme")
  testHasHerb("Basil")
  testHasHerb("Rosemary")
})

function testHasHerb(herbName: string) {
  test(`should have ${herbName}`, () => {
    const herbNames = garden.herbs.map(herb => herb.name)
    expect(herbNames).toContain(herbName)
  })
}
