import { Request, Response, Router } from 'express'
import { getGameByIdController } from '../controllers/gameController/getGameByIdController'

const router = Router()

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const gameId: number = req.params.id
    const gameDetails = await getGameByIdController(gameId)

    if (!gameDetails.id) {
      res.status(404).json({ Error: ` ${gameId} is not a valid ID.` })
    } else {
      return res.status(200).json(gameDetails)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/games')

module.exports = router

// SETUP TESTING// SETUP TESTING// SETUP TESTING// SETUP TESTING// SETUP TESTING// SETUP TESTING// SETUP TESTING// SETUP TESTING// SETUP TESTING

// access modifiers to interfaces?
