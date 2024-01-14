import { getGameByIdService } from '../../services/GetGameByIdService'

export const getGameByIdController = (id: number) => {
  const getGame = getGameByIdService(id)
  return getGame
}
