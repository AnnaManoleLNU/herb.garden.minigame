import { Player } from '../src/model/Player'

describe('Player class', () => {
  test('should have a score of 0 when created', () => {
    const player = new Player()
    expect(player.score).toBe(0)
  })
})

