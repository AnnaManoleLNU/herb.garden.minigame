export enum HerbName {
  Thyme = "Thyme",
  Basil = "Basil",
  Rosemary = "Rosemary"
}

export class Herb {
  #name: HerbName
  #wateringNeeds: number

  constructor(name: HerbName, wateringNeeds: number) {
    this.#name = name
    this.#checkWateringNeeds(wateringNeeds)
    this.#wateringNeeds = wateringNeeds
  }

  get name(): HerbName {
    return this.#name
  }

  get wateringNeeds(): number {
    return this.#wateringNeeds
  }

  #checkWateringNeeds(wateringNeeds: number): void {
    if (wateringNeeds < 1) {
      throw new Error("Watering needs cannot be less than 1")
    }
    if (wateringNeeds > 3) {
      throw new Error("Watering needs cannot be higher than 3")
    }
  }

}
