import { Game } from '../src/controller/Game'
import { Player } from '../src/model/Player'
import { Garden } from '../src/model/Garden'
import { GardenView } from '../src/view/GardenView'

jest.mock('../src/model/Player')
jest.mock('../src/model/Garden')

const mockDisplayWelcomeMessage = jest.fn()
jest.mock('../src/view/GardenView.ts', () => {
  return {
    GardenView: jest.fn().mockImplementation(() => {
      return {
        displayWelcomeMessage: mockDisplayWelcomeMessage
      }
    })
  }
})

let game: Game

beforeEach(() => {
  jest.clearAllMocks()
  game = new Game()
})

afterEach(() => {
  jest.restoreAllMocks()
})


describe('Game class', () => {
  test('should instantiate a Player object in its constructor', () => {
    expect(Player).toHaveBeenCalledTimes(1)
  })

  test('should instantiate a Garden object in its constructor', () => {
    expect(Garden).toHaveBeenCalledTimes(1)
  })

  test('should instantiate a view object in its constructor', () => {
    expect(GardenView).toHaveBeenCalledTimes(1)
  })
})

describe('Game start method', () => {
  test('should call the display welcome message from view', () => {
    game.start()
    expect(mockDisplayWelcomeMessage).toHaveBeenCalledTimes(1)
  })
})