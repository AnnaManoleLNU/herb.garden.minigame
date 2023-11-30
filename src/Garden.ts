import { Herb } from "./Herb.ts"
import { HerbName, OptimalHarvestingTime, WateringNeeds } from "./Herb.ts"

export class Garden {
  #herbs: Herb[] = []

  constructor() {
    this.#spawnAllHerbsTwice()
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
    for (let i = 0; i < 2; i++) {
      this.#herbs.push(this.#spawnThyme())
      this.#herbs.push(this.#spawnBasil())
      this.#herbs.push(this.#spawnRosemary())
    }
  }

}