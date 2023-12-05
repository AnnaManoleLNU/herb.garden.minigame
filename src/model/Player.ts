export class Player {
  #score: number = 0

  get score(): number {
    return this.#score
  }

  addPoint(value: number): void {
    if (value > 0) {
      this.#score += value
    } else {
      this.#score += 0
    }
  }
}