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
  #quality: number = 0
  #timesWatered: number = 0

  constructor(name: HerbName, wateringNeeds: WateringNeeds, optimalHarvestingTime: OptimalHarvestingTime) {
    this.#name = name
    this.#wateringNeeds = wateringNeeds
    this.#optimalHarvestingTime = optimalHarvestingTime
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
    this.#quality = Math.max(0, Math.min(value, 3));
  }

  get timesWatered(): number {
    return this.#timesWatered
  }

  water(): void {
    this.#timesWatered++

    // Used Math.abs to ensure difference is always positive
    const difference = Math.abs(this.#timesWatered - this.#wateringNeeds)

    // Set quality to 3 when times watered matches watering needs, and decrease as the difference increases
    this.#quality = 3 - difference

    // Ensure quality is within bounds of 1 and 3 after watering
    this.#quality = Math.max(1, Math.min(this.#quality, 3));
  }

}
