import { Garden } from '../src/Garden.ts'
import { Herb } from '../src/Herb.ts'

describe("Garden class", () => {

  test("should have an array list of herbs", () => {
    const garden = new Garden()
    for (let i = 0; i < garden.herbs.length; i++) {
      expect(garden.herbs[i]).toBeInstanceOf(Herb)
    }
  })

  hasHerb("Thyme")
  hasHerb("Basil")
  hasHerb("Rosemary")

})

function hasHerb(herbName: string) {
  test(`should have ${herbName}`, () => {
    const garden = new Garden()
    const herbNames = garden.herbs.map(herb => herb.name)
    expect(herbNames).toContain(herbName)
  })
}