import { Game } from '../src/controller/Game'
import { Player } from '../src/model/Player'

jest.mock('../src/model/Player.ts', () => {
  return {
    Player: jest.fn().mockImplementation()
  }
})

describe('Game', () => {
  test('should instantiate a Player object in its constructor', () => {
    const game = new Game()

    expect(Player).toHaveBeenCalledTimes(1)

  })
})