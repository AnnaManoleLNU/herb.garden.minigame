export class Herb {
  #name: string

  constructor(name: string) {
    this.#checkNameLength(name)
    this.#name = name
    if (name === "Dill") {
      throw new Error("Dill is not an acceptable herb in this game.");
    }
  }

  get name(): string {
    return this.#name
  }

  #checkNameLength(name: string) {
    if (name.length > 50) {
      throw new Error("Name must be less than 50 characters long.");
    }
  }
}
