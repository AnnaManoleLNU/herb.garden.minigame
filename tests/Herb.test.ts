import { Herb , HerbName } from "../src/Herb"

test("Herb should throw an error if watering needs is less than 1", () => {
  expect(() => new Herb(HerbName.Thyme, 0)).toThrow("Watering needs cannot be less than 1")
})