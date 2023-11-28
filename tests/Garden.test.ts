import { Garden } from '../src/Garden.ts'
import { Herb } from '../src/Herb.ts'

let herbs: Array<Herb>
let garden: Garden

beforeEach(() => {
  herbs = new Array<Herb>()
  garden = new Garden(herbs)
})

describe("Garden class", () => {
  test("should have an array list of herbs", () => {
    for (let i = 0; i < garden.herbs.length; i++) {
      expect(garden.herbs[i]).toBeInstanceOf(Herb)
    }
  })

  hasHerb("Thyme")
  hasHerb("Basil")
  hasHerb("Rosemary")

  test("should have an array list of herbs in the constructor", () => {
    expect(garden.herbs).toBe(herbs)
  })
})

function hasHerb(herbName: string) {
  test(`should have ${herbName}`, () => {
    const herbNames = garden.herbs.map(herb => herb.name)
    expect(herbNames).toContain(herbName)
  })
}
