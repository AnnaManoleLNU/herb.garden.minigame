export class Player {
  #score: number = 0

  get score(): number {
    return this.#score
  }

  addPoint(): void {
    this.#score++
  }
}