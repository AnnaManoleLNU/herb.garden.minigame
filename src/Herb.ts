export enum HerbName {
  Thyme = "Thyme",
  Basil = "Basil",
  Rosemary = "Rosemary"
}

export class Herb {
  #name: string

  constructor(name: string) {
    this.#name = name
    this.#throwErrorIfInvalidHerbName(name)
  }

  get name(): string {
    return this.#name
  }

  #throwErrorIfInvalidHerbName = (name: string): void => {
    if (!(name in HerbName)) {
      throw new Error(`Invalid herb name: ${name}. Must be one of the specified herbs.`);
    }
  }

}
