import { Herb } from "./Herb.ts"
import { HerbName, OptimalHarvestingTime, WateringNeeds } from "./Herb.ts"

export class Garden {
  #herbs: Herb[] = []

  constructor() {
    this.#addHerb(HerbName.Thyme, WateringNeeds.Low, OptimalHarvestingTime.Day2)
  }

  get herbs(): Herb[] {
    return this.#herbs
  }

  #addHerb(name:HerbName, watering: WateringNeeds, harvesting: OptimalHarvestingTime): void {
    const herb = new Herb(name, watering, harvesting)
    this.#herbs.push(herb)
  }

}