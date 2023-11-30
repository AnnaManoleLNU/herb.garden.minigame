import { Herb } from "./Herb.ts"
import { HerbName, OptimalHarvestingTime, WateringNeeds } from "./Herb.ts"

export class Garden {
  #herbs: Herb[] = []
  #herbPermutations: Herb[][] = []

  constructor() {
    this.#spawnAllHerbsTwice()
    this.#herbPermutations = this.#generatePermutations()
  }

  get herbs(): Herb[] {
    return this.#herbs
  }

  get herbPermutations(): Herb[][] {
    return this.#herbPermutations
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

  #spawnAllHerbsTwice(): void {
    this.#herbs.push(
      this.#spawnThyme(),
      this.#spawnThyme(),
      this.#spawnBasil(),
      this.#spawnBasil(),
      this.#spawnRosemary(),
      this.#spawnRosemary()
    )
  }

  #generatePermutations(): Herb[][] {
    const [thyme1, thyme2, basil1, basil2, rosemary1, rosemary2] = this.#herbs
  
    return [
      [thyme1, thyme2, basil1, basil2, rosemary1, rosemary2],
      [thyme1, thyme2, rosemary1, rosemary2, basil1, basil2],
      [basil1, basil2, thyme1, thyme2, rosemary1, rosemary2],
      [basil1, basil2, rosemary1, rosemary2, thyme1, thyme2],
      [rosemary1, rosemary2, thyme1, thyme2, basil1, basil2],
      [rosemary1, rosemary2, basil1, basil2, thyme1, thyme2]
    ]
  }
}

