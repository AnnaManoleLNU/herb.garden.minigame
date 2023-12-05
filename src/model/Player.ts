export class Player {
  #score: number = 0

  get score(): number {
    return this.#score
  }

  addPoint(value: number): void {
    // if the value is not positive, do not change the score
    if (value <= 0) return
    this.#score += value
  }
}