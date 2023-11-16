import { Herb } from "../src/Herb";

test("a herb should be created with name", () => {
  const herb = new Herb("Thyme");
  expect(herb.name).toEqual("Thyme");
})

test("name should throw exception if longer than 50 characters", () => {
  const longName = "Looooooooooooooooooooooooooooooooooooong alligator pepper";
  expect(() => new Herb(longName)).toThrow(Error);
})
