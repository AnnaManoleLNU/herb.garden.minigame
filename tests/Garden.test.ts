import { Garden } from '../src/Garden.ts'
import { Herb } from '../src/Herb'

describe("Garden class", () => {
  test("should have an array list of herbs", () => {
    const garden = new Garden()
    for (let i = 0; i < garden.herbs.length; i++) {
      expect(garden.herbs[i]).toBeInstanceOf(Herb)
    }
  })
})