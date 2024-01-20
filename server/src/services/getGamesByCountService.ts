import Game from '../types/Game'
import { apiConfig } from '../utils/apiConfig'

export const getGamesByCount = (quantity: number) => {
  const URL = `${apiConfig.BASE_URL}${apiConfig.GAMES_CATEGORY}${apiConfig.PAGE_SIZE_}${quantity}&key=${apiConfig.API_KEY}`

  const getGames = fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const games: Game[] = data.results.map((gameData: Game) => {
        const game: Game = {
          id: gameData.id,
          slug: gameData.slug,
          name: gameData.name,
          description_raw: gameData.description_raw,
          metacritic: gameData.metacritic,
          released: gameData.released,
          tba: gameData.tba,
          rating: gameData.rating,
          ratings_count: gameData.ratings_count,
          reviews_count: gameData.reviews_count,
        }

        return game
      })

      return games
    })

  return getGames
}
