import { Player } from '../model/Player'
import { Garden } from '../model/Garden'
import { GardenView } from '../view/GardenView'

export class Game {
  player: Player
  garden: Garden
  view: any

  constructor() {
    this.player = new Player()
    this.garden = new Garden()
    this.view = new GardenView(this.garden)
  }
}