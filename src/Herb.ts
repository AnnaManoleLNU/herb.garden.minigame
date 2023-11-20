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
    this.#wateringNeeds = this.#checkWateringNeeds(wateringNeeds)
  }

  get name(): HerbName {
    return this.#name
  }

  get wateringNeeds(): number {
    return this.#wateringNeeds
  }

  #checkWateringNeeds(wateringNeeds: number): number {
    if (wateringNeeds < 1) {
      return 1
    } else {
      return wateringNeeds
    }
  }

}
