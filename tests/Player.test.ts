import { Player } from '../src/model/Player'

let player: Player

beforeEach(() => {
  player = new Player()
})

describe('Player class score', () => {
  test('should be 0 when created', () => {
    expect(player.score).toBe(0)
  })

  test('should increase by 3 when passing in 3 (max herb quality)', () => {
    player.addScore(3)
    expect(player.score).toBe(3)
  })

  test('should not change when adding a negative value', () => {
    player.addScore(-3)
    expect(player.score).toBe(0)
  })

  test('should be 36 max (6 herbs with 6 points to get from watering perfecty and harvesting perfectly)', () => {
    const score = 36
    player.addScore(score)
    const illegalPoint = 1
    player.addScore(illegalPoint)
    expect(player.score).toBe(score)
  })

  test('should not change the score when ading points that exceeds 36 (max score)', () => {
    player.addScore(35)
    player.addScore(2)
    expect(player.score).toBe(35)
  })

  test('should throw exception when adding a float to it', () => {
    expect(() => player.addScore(1.5)).toThrow()
  })

  test('should throw an exception and not change the score when adding a float to it', () => {
    const initialScore = player.score
    expect(() => player.addScore(1.5)).toThrow()
    expect(player.score).toBe(initialScore)
  })

  test('should be resetable to 0', () => {
    player.addScore(1)
    player.resetScore()
    expect(player.score).toBe(0)
  })
})

