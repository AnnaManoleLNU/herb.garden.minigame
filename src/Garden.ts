import { Herb } from "./Herb.ts"
import { HerbName, OptimalHarvestingTime, WateringNeeds } from "./Herb.ts"

export class Garden {
  #herbs: Herb[] = []

  constructor() {
    this.#spawnAllHerbsTwice()
  }

  get herbs(): Herb[] {
    return this.#herbs
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
  
}
