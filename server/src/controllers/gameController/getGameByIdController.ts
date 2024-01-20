import { Request, Response } from 'express'
import { getGameByIdService } from '../../services/GetGameByIdService'

const validateIDAndSendResponse = async (id: number, res: Response) => {
  const getGame = await getGameByIdService(id)

  isNaN(id) || !getGame.id
    ? res.status(400).json({ error: 'Invalid ID provided' })
    : res.status(200).json(getGame)
}

export const getGameByIdController = (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id)

    return validateIDAndSendResponse(id, res)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
