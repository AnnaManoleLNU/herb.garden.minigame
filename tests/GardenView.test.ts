import { GardenView } from '../src/view/GardenView'

describe('GardenView class', () => {
  test('should display a welcome message', () => {
    const gardenView = new GardenView()
    console.log = jest.fn()
    gardenView.displayWelcomeMessage()
    expect(console.log).toHaveBeenCalledWith('Welcome to the Garden!')
  })

  test('should display all herbs in the garden', () => {
    const gardenView = new GardenView()
    console.log = jest.fn()
    gardenView.displayAllHerbs()
    expect(console.log).toHaveBeenCalledTimes(5)
  })
})