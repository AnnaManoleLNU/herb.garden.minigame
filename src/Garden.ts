import { Herb } from "./Herb.ts"

export class Garden {
  #herbs: Herb[] = []

  get herbs(): Herb[] {
    return this.#herbs
  }

}