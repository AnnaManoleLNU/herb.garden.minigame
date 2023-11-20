export enum HerbName {
  Thyme = "Thyme",
  Basil = "Basil",
  Rosemary = "Rosemary"
}

export class Herb {
  #name: HerbName

  constructor(name: HerbName) {
    this.#name = name
  }

  get name(): HerbName {
    return this.#name
  }

}
