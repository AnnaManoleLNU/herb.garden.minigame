import { Herb } from "../src/Herb"

test("herb name not part of the HerbName enum should throw an error", () => {
  const invalidHerbName = "Dill"
  expect(() => new Herb(invalidHerbName)).toThrow(Error)
})
