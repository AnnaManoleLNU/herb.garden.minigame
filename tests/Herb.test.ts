import { Herb , HerbName } from "../src/Herb"

test("herb name not part of the HerbName enum should throw an error", () => {
  const invalidHerbName = "Dill"
  expect(() => new Herb(invalidHerbName)).toThrow(Error)
})

test("herb's name attribute should match the exact string value of the HerbName enum", () => {
  const herbName = "thyme"
  const herb = new Herb(herbName)
  
  expect(herb.name).toBe(HerbName.Thyme)
});