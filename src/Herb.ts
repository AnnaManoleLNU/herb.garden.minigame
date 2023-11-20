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
    this.#wateringNeeds = wateringNeeds
    if (wateringNeeds < 1) {
      this.#wateringNeeds = 1
    }
  }

  get name(): HerbName {
    return this.#name
  }

  get wateringNeeds(): number {
    return this.#wateringNeeds
  }

}
