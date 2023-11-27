import { Herb } from "./Herb"

export class Garden {
  #herbs: Herb[] = []


  get herbs(): Herb[] {
    return this.#herbs
  }
}