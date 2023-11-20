import { Herb , HerbName } from "../src/Herb"

test ("Herb watering needs should be not be less than 1", () => {
  const herb = new Herb(HerbName.Thyme , 0)
  expect(herb.wateringNeeds).toBeGreaterThanOrEqual(1)
})