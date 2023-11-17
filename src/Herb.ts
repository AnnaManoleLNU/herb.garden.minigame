export enum HerbName {
  Thyme = "Thyme",
  Basil = "Basil",
  Rosemary = "Rosemary"
}

export class Herb {
  #name: string

  constructor(name: string) {
    name = this.#fixCaseSensitiveHerbName(name)
    this.#throwErrorIfInvalidHerbName(name)
    this.#name = name
  }

  get name(): string {
    return this.#name
  }

  #throwErrorIfInvalidHerbName = (name: string): void => {
    if (!(name in HerbName)) {
      throw new Error(`Invalid herb name: ${name}. Must be one of the specified herbs.`);
    }
  }

  #fixCaseSensitiveHerbName = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  }

}
