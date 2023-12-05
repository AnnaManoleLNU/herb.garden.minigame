export class Player {
  #score: number = 0

  get score(): number {
    return this.#score
  }

  addPoint(value: number): void {
    if (this.#score + value > 36) {
      // should remain unchanged
      return
    }
    if (value > 0 && this.#score < 36) {
      this.#score += value
    } else {
      this.#score += 0
    }

  }
}