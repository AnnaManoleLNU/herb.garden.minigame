import { Herb } from "./Herb.ts"
import { HerbName, OptimalHarvestingTime, WateringNeeds } from "./Herb.ts"

export class Garden {

  spawnThyme(): Herb {
    const thyme = new Herb(HerbName.Thyme, WateringNeeds.Low, OptimalHarvestingTime.Day2)
    return thyme
  }

}