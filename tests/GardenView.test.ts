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
    expect(console.log).toHaveBeenCalledWith('Welcome to the Garden!')
  })

  test('should display all herbs in the garden', () => {
    gardenView.displayAllHerbs()
    expect(console.log).toHaveBeenCalledTimes(6)
  })

  test('should display all herb names with a new line afterwards', () => {
    gardenView.displayAllHerbs()
    expect(console.log).toHaveBeenCalledWith('Thyme\n')
    expect(console.log).toHaveBeenCalledWith('Basil\n')
    expect(console.log).toHaveBeenCalledWith('Rosemary\n')
  })
})