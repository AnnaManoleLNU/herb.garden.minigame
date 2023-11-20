export enum HerbName {
  Thyme = "Thyme",
  Basil = "Basil",
  Rosemary = "Rosemary"
}

export enum WateringNeeds {
  Low = 1,
  Medium = 2,
  High = 3
}

export enum OptimalHarvestingTime {
  Day2 = 2,
  Day3 = 3,
  Day4 = 4,
  Day5 = 5
}

export class Herb {
  #name: HerbName
  #wateringNeeds: WateringNeeds
  #optimalHarvestingTime: OptimalHarvestingTime

  constructor(name: HerbName, wateringNeeds: WateringNeeds, optimalHarvestingTime: OptimalHarvestingTime) {
    this.#name = name
    this.#wateringNeeds = wateringNeeds
    this.#optimalHarvestingTime = optimalHarvestingTime
  }

  get name(): HerbName {
    return this.#name
  }

  get wateringNeeds(): number {
    return this.#wateringNeeds
  }


}
