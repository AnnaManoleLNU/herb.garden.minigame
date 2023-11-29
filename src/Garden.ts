import { Herb } from "./Herb.ts"
import { HerbName, OptimalHarvestingTime, WateringNeeds } from "./Herb.ts"

export class Garden {
  #herbs: Herb[] = []

  constructor(herbs: Herb[]) {
    this.#herbs = herbs
  }

  spawnThyme(): void {
    
  }

}