import { apiConfig } from '../utils/apiConfig'
import Game from '../types/Game'

export const getGamesByGenreAndCount = (genre: string, count: number) => {
  const URL = `${apiConfig.BASE_URL}${apiConfig.GAMES_CATEGORY}?key=${apiConfig.API_KEY}${apiConfig.GENRE}${genre}${apiConfig.PAGE_SIZE}${count}`

  const getGames = fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const games: Game[] = data.results.map((gameData: any) => {
        const title: Game = {
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
        return title
      })
      return games
    })
  return getGames
}
