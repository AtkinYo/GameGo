import { Request, Response, Router } from 'express'
import { getGameByIdController } from '../controllers/gameController/getGameByIdController'
import { getGamesByCount } from '../services/getGamesByCountService'
import { getGamesByGenreAndCount } from '../services/getGamesByGenreAndCountService'
import { getGamesByGenreAndCountController } from '../controllers/gameController/getGamesByGenreAndCountController'

const router = Router()

// Get single game details by ID
router.get('/id/:id', async (req: Request, res: Response) => {
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

// Get an array of games by count
router.get('/count/:count', async (req: Request, res: Response) => {
  try {
    const count: number = req.params.count
    const getGames = await getGamesByCount(count)

    if (count > 20) {
      return res.status(404).json({ Error: 'Too many requests' })
    } else {
      res.json(getGames)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/:genre/:count', getGamesByGenreAndCountController)

module.exports = router
