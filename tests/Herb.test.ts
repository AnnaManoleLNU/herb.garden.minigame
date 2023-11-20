import { Herb , HerbName } from "../src/Herb"

test ("Herb watering needs should be not be less than 1", () => {
  const herb = new Herb(HerbName.Thyme , 0)
  expect(herb.wateringNeeds).toBeGreaterThanOrEqual(1)
})

test("Herb should throw an error if watering needs is less than 1", () => {
  expect(() => new Herb(HerbName.Thyme, 0)).toThrow("Watering needs cannot be less than 1")
})