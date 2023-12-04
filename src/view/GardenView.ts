import { Garden } from '../model/Garden'

export class GardenView {
  garden: Garden
  welcomeMessage: string = 'Welcome to the Garden! These are the herbs you have to take care of:\n'

  constructor(garden: Garden) {
    this.garden = garden
  }

  displayWelcomeMessage() : void {
    console.log(this.welcomeMessage)
  }

  displayAllHerbs() : void {
    this.garden.herbs.forEach(herb => {
      const herbInformation = `${herb.name}, with watering needs ${herb.wateringNeeds}, and optimal harvesting time Day ${herb.optimalHarvestingTime}\n`
      console.log(herbInformation)
    })
  }
}
