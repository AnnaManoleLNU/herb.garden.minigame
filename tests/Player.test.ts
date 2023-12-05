import { Player } from '../src/model/Player'

describe('Player class', () => {
  test('should have a score of 0 when created', () => {
    const player = new Player()
    expect(player.score).toBe(0)
  })

  test('score should increase by 3 when passing in 3 (max herb quality)', () => {
    const player = new Player()
    player.addPoint(3)
    expect(player.score).toBe(3)
  })
})

