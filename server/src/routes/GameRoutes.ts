import { Router } from 'express'
import { getGameByIdController } from '../controllers/gameController/getGameByIdController'
import { getGamesByGenreAndCountController } from '../controllers/gameController/getGamesByGenreAndCountController'
import { getGamesByCountController } from '../controllers/gameController/getGamesByCountController'

const router = Router()

// Get single title by ID
router.get('/id/:id', getGameByIdController)

// Get an array of games by count - less than or equal to 20
router.get('/count/:count', getGamesByCountController)

// Get games by genre and count
router.get('/:genre/:count', getGamesByGenreAndCountController)

module.exports = router
