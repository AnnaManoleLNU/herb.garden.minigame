import { Player } from '../src/model/Player'

let player: Player

beforeEach(() => {
  player = new Player()
})

describe('Player class score', () => {
  test('should have a score of 0 when created', () => {
    expect(player.score).toBe(0)
  })

  test('score should increase by 3 when passing in 3 (max herb quality)', () => {
    player.addScore(3)
    expect(player.score).toBe(3)
  })

  test('adding in a negative value should not change the score', () => {
    player.addScore(-3)
    expect(player.score).toBe(0)
  })

  test('max score should be 36 (6 herbs with 6 points to get from watering perfecty and harvesting perfectly)', () => {
    const score = 36
    player.addScore(score)
    const illegalPoint = 1
    player.addScore(illegalPoint)
    expect(player.score).toBe(score)
  })

  test('adding points that exceeds max score should not change the score', () => {
    player.addScore(35)
    player.addScore(2)
    expect(player.score).toBe(35)
  })

  test('adding a float to the score should throw exception', () => {
    expect(() => player.addScore(1.5)).toThrow()
  })

  test('adding a float to the score should not change the value', () => {
    player.addScore(1.5)
    expect(player.score).toBe(0)
  })
})

