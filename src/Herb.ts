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
  #quality: number

  constructor(name: HerbName, wateringNeeds: WateringNeeds, optimalHarvestingTime: OptimalHarvestingTime) {
    this.#name = name
    this.#wateringNeeds = wateringNeeds
    this.#optimalHarvestingTime = optimalHarvestingTime
    this.#quality = 0
  } 
  
  get name(): HerbName {
    return this.#name
  }

  get wateringNeeds(): WateringNeeds {
    return this.#wateringNeeds
  }

  get optimalHarvestingTime(): OptimalHarvestingTime {
    return this.#optimalHarvestingTime
  }

  get quality(): number {
    return this.#quality
  }

  set quality(value: number) {
    if (value < 0) {
      value = 0
    }
    this.#quality = value
  }

}
