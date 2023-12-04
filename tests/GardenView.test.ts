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
    const garden = new Garden()
    const gardenView = new GardenView(garden)
    console.log = jest.fn()
    gardenView.displayWelcomeMessage()
    expect(console.log).toHaveBeenCalledWith('Welcome to the Garden!')
  })

  test('should display all herbs in the garden', () => {
    const garden = new Garden()
    const gardenView = new GardenView(garden)
    console.log = jest.fn()
    gardenView.displayAllHerbs()
    expect(console.log).toHaveBeenCalledTimes(6)
  })
})