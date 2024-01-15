import { getGamesByCount } from '../../services/getGamesByCountService'

describe('Get an array of games by quantity', () => {
  test('Fetch games', async () => {
    const count = 5
    const games = await getGamesByCount(count)

    games.forEach((title) => {
      expect(title).toHaveProperty('id')
      expect(title).toHaveProperty('name')
      expect(title).toHaveProperty('slug')
    })

    expect(games).toHaveLength(count)
  })
})
