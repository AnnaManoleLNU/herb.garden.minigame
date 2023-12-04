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

  test('should display all herb infomation with a new line afterwards', () => {
    gardenView.displayAllHerbs()
    expect(console.log).toHaveBeenCalledWith('Thyme, with watering needs Low, and optimal harvesting time Day 2 \n')
    expect(console.log).toHaveBeenCalledWith('Basil, with watering needs Medium, and optimal harvesting time Day 3 \n')
    expect(console.log).toHaveBeenCalledWith('Rosemary, with watering needs High, and optimal harvesting time Day 4 \n')
  })
})