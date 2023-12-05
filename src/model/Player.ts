export class Player {
  #score: number = 0

  get score(): number {
    return this.#score
  }

  addPoint(value:number): void {
    this.#score++
  }
}