import { Request, Response } from 'express'
import { getGamesByCount } from '../../services/getGamesByCountService'

const validateCountAndSendResponse = async (count: number, res: Response) => {
  const getGames = await getGamesByCount(count)

  if (count > 20 || isNaN(count)) {
    return res.status(404).json({
      Error: 'Must enter a number less than or equal to 20',
    })
  }

  if (isNaN(count)) {
    return res.status(404).json({ Error: 'Not a valid number' })
  }

  return res.json(getGames)
}

export const getGamesByCountController = (req: Request, res: Response) => {
  try {
    const count: number = req.params.count

    return validateCountAndSendResponse(count, res)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
