import { getGameByIdService } from '../../services/GetGameByIdService'

describe('Get Game by ID', () => {
  test('Fetch game by ID', async () => {
    const gameId = 28
    const gameDetails = await getGameByIdService(gameId)

    expect(gameDetails).toHaveProperty('id')
    expect(gameDetails.id).toBe(gameId)
  })
})
