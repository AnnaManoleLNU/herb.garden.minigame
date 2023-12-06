import { Player } from '../model/Player'
import { Garden } from '../model/Garden'
import { GardenView } from '../view/GardenView'

export class Game {
  player: Player
  garden: Garden
  view: GardenView

  constructor() {
    this.player = new Player()
    this.garden = new Garden()
    this.view = new GardenView(this.garden)
  }

  displayStartMessages(): void {
    this.view.displayWelcomeMessage()
    this.view.displayAllHerbs()
  }

  playGameWithAi(): void {
    this.#playWithAiPlayer()
    this.#resultsOfWateringForAi()
  }

  #playWithAiPlayer(): void {
    this.garden.herbs.forEach(herb => {
      if (herb.name === 'Thyme') {
        herb.water()
        this.view.displayHerbWateringMessage(herb.name)
      }

      if (herb.name === 'Basil') {
        for (let i = 0; i < 2; i++) {
          herb.water()
          this.view.displayHerbWateringMessage(herb.name)
        }
      }

      if (herb.name === 'Rosemary') {
        for (let i = 0; i < 3; i++) {
          herb.water()
          this.view.displayHerbWateringMessage(herb.name)
        }
      }
    })

    console.log('-------------------')
  }

  #resultsOfWateringForAi(): void {
    for (let i = 0; i < this.garden.herbs.length; i++) {
      this.view.displayHerbQuality(this.garden.herbs[i].name)
      this.player.addScore(this.garden.herbs[i].quality)
      if (this.garden.herbs[i].quality === 3) {
        this.player.harvest(this.garden.herbs[i])
        this.view.displayHarvestMessage(this.garden.herbs[i].name)
      }
    }

    console.log(`Game over. The herbs you harvested are: ${this.player.inventory.map(herb => herb.name).join(', ')}`)
    console.log('Your score is: ' + this.player.score)
  }
}