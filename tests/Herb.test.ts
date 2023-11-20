import { Herb , HerbName } from "../src/Herb"

test("Herb should throw an error if watering needs is less than 1", () => {
  expect(() => new Herb(HerbName.Thyme, 0)).toThrow()
})

test("Herb should throw an error if watering needs is higher than 3", () => {
  expect(() => new Herb(HerbName.Thyme, 4)).toThrow()
})

test("Herb should throw an error if watering needs is not a whole number", () => {
  expect(() => new Herb(HerbName.Thyme, 1.7)).toThrow()
})