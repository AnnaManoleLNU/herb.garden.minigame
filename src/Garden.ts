import { Herb } from "./Herb.ts"
import { HerbName, OptimalHarvestingTime, WateringNeeds } from "./Herb.ts"

export class Garden {
  #herbs: Herb[] = []

  constructor() {
    this.#spawnAllHerbs()
    this.#spawnAllHerbs()
  }

  #spawnThyme(): Herb {
    const thyme = new Herb(HerbName.Thyme, WateringNeeds.Low, OptimalHarvestingTime.Day2)
    return thyme
  }

  #spawnBasil(): Herb {
    const basil = new Herb(HerbName.Basil, WateringNeeds.Medium, OptimalHarvestingTime.Day3)
    return basil
  }

  #spawnRosemary(): Herb {
    const rosemary = new Herb(HerbName.Rosemary, WateringNeeds.High, OptimalHarvestingTime.Day4)
    return rosemary
  }

  #spawnAllHerbs(): void {
    this.#herbs.push(this.#spawnThyme())
    this.#herbs.push(this.#spawnBasil())
    this.#herbs.push(this.#spawnRosemary())
  }

}