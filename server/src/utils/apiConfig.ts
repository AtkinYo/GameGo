require('dotenv').config()

const apiKey = process.env.API_KEY

export const apiConfig = {
  BASE_URL: 'https://api.rawg.io/api',
  GAMES_CATEGORY: '/games',
  API_KEY: apiKey,
}
