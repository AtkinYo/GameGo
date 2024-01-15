import { getGameByIdService } from '../../services/GetGameByIdService'

describe('Get Game by ID', () => {
  test('Fetch game by ID', async () => {
    const id = 28
    const title = await getGameByIdService(id)

    expect(title).toHaveProperty('id')
    expect(title).toHaveProperty('name')
    expect(title).toHaveProperty('slug')
    expect(title.id).toBe(id)
  })
})
