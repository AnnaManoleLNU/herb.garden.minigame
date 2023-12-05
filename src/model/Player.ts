export class Player {
  #score: number = 0

  get score(): number {
    return this.#score
  }

  addScore(value: number): void {
    // throw exception if value is a float
    if (value % 1 !== 0) {
      throw new Error("Value to be added must be an integer.")
    }
    
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