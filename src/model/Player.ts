export class Player {
  #score: number = 0

  get score(): number {
    return this.#score
  }

  addScore(value: number): void {
    if (this.#score + value > 36) {
      return
    }

    if (value > 0 && this.#score < 36) {
      this.#score += value
    } else {
      this.#score += 0
    }
  }
}