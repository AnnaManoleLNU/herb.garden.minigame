import { Garden } from '../src/Garden.ts'
import { Herb } from '../src/Herb.ts'

describe("Garden class", () => {

  test("should have an array list of herbs", () => {
    const garden = new Garden()
    for (let i = 0; i < garden.herbs.length; i++) {
      expect(garden.herbs[i]).toBeInstanceOf(Herb)
    }
  })

  test("should have Thyme", () => {
    const garden = new Garden()
    for (let i = 0; i < garden.herbs.length; i++) {
      expect(garden.herbs[i].name).toBe("Thyme")
    }
  })

  test("should have Rosemary", () => {
    const garden = new Garden()
    for (let i = 0; i < garden.herbs.length; i++) {
      expect(garden.herbs[i].name).toBe("Rosemary")
    }    
  })

})