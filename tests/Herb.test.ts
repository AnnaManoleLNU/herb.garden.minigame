import { Herb , HerbName } from "../src/Herb"

describe("Herb class validations", () => {
  const invalidHerbConfigurations = [
    { name: HerbName.Thyme, water: 0, harvest: 2, description: "watering needs less than 1" },
    { name: HerbName.Thyme, water: 4, harvest: 2, description: "watering needs higher than 3" },
    { name: HerbName.Thyme, water: 1.7, harvest: 2, description: "watering needs not a whole number" },
    { name: HerbName.Thyme, water: 1, harvest: 1, description: "optimal harvesting time less than 2" },
    {name: HerbName.Thyme, water: 1, harvest: 6, description: "optimal harvesting time higher than 5"},
    { name:HerbName.Thyme, water:1, harvest: 2.7, description: "optimal harvesting time not a whole number"}
  ]

  invalidHerbConfigurations.forEach(({ name, water, harvest, description }) => {
    test(`Herb should throw an error if ${description}`, () => {
      expect(() => new Herb(name, water, harvest)).toThrow()
    })
  })
})