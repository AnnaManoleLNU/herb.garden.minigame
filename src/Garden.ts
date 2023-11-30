import { Herb } from "./Herb.ts"
import { HerbName, OptimalHarvestingTime, WateringNeeds } from "./Herb.ts"

export class Garden {
  #herbs: Herb[] = []

  constructor() {
    this.#herbs.push(this.#spawnThyme())
  }

  get herbs(): Herb[] {
    return this.#herbs
  }

  spawnHerb(herbName: HerbName): Herb {
    if (herbName === HerbName.Thyme) {
      return this.#spawnThyme()
    } else if (herbName === HerbName.Basil) {
      return this.#spawnBasil()
    } else if (herbName === HerbName.Rosemary) {
      return this.#spawnRosemary()
    } else {
      throw new Error("Illegal herb name")
    }
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

}