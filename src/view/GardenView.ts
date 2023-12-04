import { Garden } from '../model/Garden'

export class GardenView {
  garden: Garden

  constructor(garden: Garden) {
    this.garden = garden
  }

  displayWelcomeMessage() {
    console.log('Welcome to the Garden!')
  }

  displayAllHerbs() {
    for (let i = 0; i < this.garden.herbs.length; i++) {
      const herb = this.garden.herbs[i]
      console.log(herb.name + '\n')
    }
  }
}
