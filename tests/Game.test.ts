import { Game } from '../src/controller/Game'
import { Player } from '../src/model/Player'

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

describe('Game class', () => {
  test('should instantiate a Player object in its constructor', () => {
    expect(Player).toHaveBeenCalledTimes(1)
  })
})