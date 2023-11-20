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
    if (wateringNeeds < 1) {
      throw new Error("Watering needs cannot be less than 1")
    }
    if (wateringNeeds > 3) {
      throw new Error("Watering needs cannot be higher than 3")
    }
    this.#wateringNeeds = wateringNeeds
  }

  get name(): HerbName {
    return this.#name
  }

  get wateringNeeds(): number {
    return this.#wateringNeeds
  }

}
