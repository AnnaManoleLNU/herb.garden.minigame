import { Herb } from "../src/Herb";

test("a herb should be created with name", () => {
  const herb = new Herb("Thyme");
  expect(herb.name).toEqual("Thyme");
})

test("name should throw exception if longer than 50 characters", () => {
  const longName = 'a'.repeat(51)
  expect(() => new Herb(longName)).toThrow(Error);
})

enum HerbName {
  Thyme = "Thyme",
  Basil = "Basil",
  Rosemary = "Rosemary"
}

test("herb name not part of the HerbName enum should throw an error", () => {
  const herbName = "Dill"
  expect(() => new Herb(herbName)).toThrow(Error)
})
