import { Herb } from "./Herb.ts"
import { HerbName, OptimalHarvestingTime, WateringNeeds } from "./Herb.ts"

export class Garden {
  #herbs: Herb[] = []

  constructor() {
    this.#herbs.push(new Herb(HerbName.Basil, WateringNeeds.Low, OptimalHarvestingTime.Day2))
  }

  get herbs(): Herb[] {
    return this.#herbs
  }

}