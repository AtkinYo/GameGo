import { Request, Response } from 'express'
import { getGamesByGenreAndCount } from '../../services/getGamesByGenreAndCountService'
import { apiConfig } from '../../utils/apiConfig'

export const getGamesByGenreAndCountController = async (
  req: Request,
  res: Response
) => {
  try {
    const { genre, count } = req.params // Assuming you're passing these as route parameters

    const games = await getGamesByGenreAndCount(genre, count)

    if (count > 20) {
      return res.status(404).json('Too many requests')
    }

    return !games.length
      ? res.status(404).json({
          Error: `Looks like that genre doesn't exist! Try these ones: ${apiConfig.genres}`,
        })
      : res.json(games)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
