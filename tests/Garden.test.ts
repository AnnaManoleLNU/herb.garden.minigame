import { Garden } from '../src/Garden.ts'
import { Herb } from '../src/Herb.ts'

describe("Garden class", () => {

  test("should have an array list of herbs", () => {
    const herbs = new Array<Herb>()
    const garden = new Garden(herbs)
    for (let i = 0; i < garden.herbs.length; i++) {
      expect(garden.herbs[i]).toBeInstanceOf(Herb)
    }
  })

  hasHerb("Thyme")
  hasHerb("Basil")
  hasHerb("Rosemary")

  test("should have an array list of herbs in the constructor", () => {
    const herbs = new Array<Herb>()
    const garden = new Garden(herbs)
    expect(garden.herbs).toBe(herbs)
  })

})

function hasHerb(herbName: string) {
  test(`should have ${herbName}`, () => {
    const herbs = new Array<Herb>()
    const garden = new Garden(herbs)
    const herbNames = garden.herbs.map(herb => herb.name)
    expect(herbNames).toContain(herbName)
  })
}