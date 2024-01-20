import { Request, Response } from 'express'
import { getGamesByGenreAndCount } from '../../services/getGamesByGenreAndCountService'
import { apiConfig } from '../../utils/apiConfig'
import Game from '../../types/Game'
const MAX_REQUEST_COUNT = 20

const validateAndSendResponse = (
  res: Response,
  games: Game[],
  count: number
) => {
  if (count > MAX_REQUEST_COUNT) {
    return res.json('Too many requests')
  }

  if (!games.length) {
    return res.status(500).json({
      Error: `Looks like that genre doesn't exist! Try these ones: ${apiConfig.genres}`,
    })
  }

  res.json(games)
}

export const getGamesByGenreAndCountController = async (
  req: Request,
  res: Response
) => {
  try {
    const { genre, count } = req.params // Assuming you're passing these as route parameters
    const games = await getGamesByGenreAndCount(genre, count)

    validateAndSendResponse(res, games, count)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
