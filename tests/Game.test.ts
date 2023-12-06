import { Game } from '../src/controller/Game'
import { Player } from '../src/model/Player'
import { Garden } from '../src/model/Garden'
import { GardenView } from '../src/view/GardenView'

let game: Game

beforeEach(() => {
  jest.clearAllMocks()
  game = new Game()
})

jest.mock('../src/model/Player.ts', () => {
  return {
    Player: jest.fn().mockImplementation()
  }
})

jest.mock('../src/model/Garden.ts', () => {
  return {
    Garden: jest.fn().mockImplementation()
  }
})

jest.mock('../src/view/GardenView.ts', () => {
  return {
    GardenView: jest.fn().mockImplementation()
  }
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