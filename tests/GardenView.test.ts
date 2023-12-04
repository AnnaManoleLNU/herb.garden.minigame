import { GardenView } from '../src/view/GardenView'
import { Garden } from '../src/model/Garden'

let gardenView: GardenView

beforeEach(() => {
  const garden = new Garden()
  gardenView = new GardenView(garden)
  console.log = jest.fn()
})

describe('GardenView class', () => {
  test('should display a welcome message', () => {
    gardenView.displayWelcomeMessage()
    expect(console.log).toHaveBeenCalledWith(gardenView.welcomeMessage)
  })

  test('should display all herbs in the garden', () => {
    gardenView.displayAllHerbs()
    expect(console.log).toHaveBeenCalledTimes(6)
  })

  test('should display the herb infomation of all herbs with a new line afterwards', () => {
    gardenView.displayAllHerbs()
    expect(console.log).toHaveBeenCalledWith(gardenView.herbInformation)
  })

  test('should display a message when a herb is watered', () => {
    const herbName = 'Thyme'
    gardenView.displayHerbWateringMessage(herbName)
    expect(console.log).toHaveBeenCalledWith(`You watered a ${herbName}!`)
  })
})