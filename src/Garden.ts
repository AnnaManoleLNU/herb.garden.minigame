import { Herb } from "./Herb.ts"
import { HerbName, OptimalHarvestingTime, WateringNeeds } from "./Herb.ts"

export class Garden {
  #herbs: Herb[] = []
  #herbPermutations: Herb[][] = this.#generatePermutations()

  constructor() {
    this.#spawnHerbsUsingRandomPermutation()
  }

  get herbs(): Herb[] {
    return this.#herbs
  }

  get herbPermutations(): Herb[][] {
    return this.#herbPermutations
  }

  #spawnHerbsUsingRandomPermutation(): void {
    const randomIndex = Math.floor(Math.random() * this.#herbPermutations.length)
    const selectedPermutation = this.#herbPermutations[randomIndex]

    this.#herbs = selectedPermutation
  }

  #generatePermutations(): Herb[][] {
    const thyme1 = this.#spawnThyme()
    const thyme2 = this.#spawnThyme()
    const basil1 = this.#spawnBasil()
    const basil2 = this.#spawnBasil()
    const rosemary1 = this.#spawnRosemary()
    const rosemary2 = this.#spawnRosemary()

    return [
      [thyme1, thyme2, basil1, basil2, rosemary1, rosemary2],
      [thyme1, thyme2, rosemary1, rosemary2, basil1, basil2],
      [basil1, basil2, thyme1, thyme2, rosemary1, rosemary2],
      [basil1, basil2, rosemary1, rosemary2, thyme1, thyme2],
      [rosemary1, rosemary2, thyme1, thyme2, basil1, basil2],
      [rosemary1, rosemary2, basil1, basil2, thyme1, thyme2]
    ]
  }

  #spawnThyme(): Herb {
    return new Herb(HerbName.Thyme, WateringNeeds.Low, OptimalHarvestingTime.Day2)
  }

  #spawnBasil(): Herb {
    return new Herb(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3)
  }

  #spawnRosemary(): Herb {
    return new Herb(HerbName.Rosemary, WateringNeeds.High, OptimalHarvestingTime.Day4)
  }
}
