import { Player } from '../src/model/Player'

let player: Player

beforeEach(() => {
  player = new Player()
})

describe('Player class', () => {
  test('should have a score of 0 when created', () => {
    expect(player.score).toBe(0)
  })

  test('score should increase by 3 when passing in 3 (max herb quality)', () => {
    player.addPoint(3)
    expect(player.score).toBe(3)
  })

  test('adding in a negative value should not change the score', () => {
    player.addPoint(-3)
    expect(player.score).toBe(0)
  })

  test('max score should be 36 (6 herbs with 6 points to get from watering perfecty and harvesting perfectly)', () => {
    const score = 36
    player.addPoint(score)
    const illegalPoint = 1
    player.addPoint(illegalPoint)
    expect(player.score).toBe(score)
  })
})

