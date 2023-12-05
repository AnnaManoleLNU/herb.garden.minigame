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

  test('adding in a negative value should not change the score', () => {
    const player = new Player()
    player.addPoint(-3)
    expect(player.score).toBe(0)
  })

  test('max score should be 6 x 6', () => {
    const player = new Player()
    // 6 herbs, 6 max quality each (3 from watering perfectly, 3 from harvesting perfectly)
    const score = 6 * 6 
    player.addPoint(score)
    const illegalPoint = 1
    player.addPoint(illegalPoint)
    expect(player.score).toBe(score)
})
})

