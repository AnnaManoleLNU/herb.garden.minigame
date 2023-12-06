import { Player } from '../model/Player'
import { Garden } from '../model/Garden'

export class Game {
  player: Player
  garden: Garden

  constructor() {
    this.player = new Player()
    this.garden = new Garden()
  }
}