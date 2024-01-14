import Developer from './Developer'
import Genre from './Genres'
import ParentPlatform from './ParentPlatform'

export default interface Game {
  id: number
  slug: string
  name: string
  description_raw: string
  metacritic: number
  released: string
  tba: false
  rating: number
  ratings_count: number
  reviews_count: number
  parent_platforms: ParentPlatform[]
  developer: Developer[]
  genres: Genre[]
}
