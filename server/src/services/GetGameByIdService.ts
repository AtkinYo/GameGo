import { apiConfig } from '../utils/apiConfig'
import Game from '../types/Game'

export const getGameByIdService = (id: number) => {
  const URL = `${apiConfig.BASE_URL}${apiConfig.GAMES_CATEGORY}/${id}?key=${apiConfig.API_KEY}`

  const getGame = fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const game: Game = {
        id: data.id,
        slug: data.slug,
        name: data.name,
        description_raw: data.description,
        metacritic: data.metacritic,
        released: data.released,
        tba: data.tba,
        rating: data.rating,
        ratings_count: data.ratings_count,
        reviews_count: data.reviews_count,
        parent_platforms: data.parent_platforms,
        developer: data.developers,
        genres: data.genres,
      }
      return game
    })

  return getGame
}
