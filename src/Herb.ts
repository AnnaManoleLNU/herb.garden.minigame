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
    this.#wateringNeeds = this.#validateWateringNeeds(wateringNeeds)
  }

  get name(): HerbName {
    return this.#name
  }

  get wateringNeeds(): number {
    return this.#wateringNeeds
  }

  #validateWateringNeeds = (wateringNeeds: number): number => {
    if (wateringNeeds < 1 || wateringNeeds > 3 || !Number.isInteger(wateringNeeds)) {
      throw new Error("Watering needs must be a whole number between 1 and 3.")
    }
    return wateringNeeds
  }

}
