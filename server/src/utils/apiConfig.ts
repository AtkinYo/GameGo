require('dotenv').config()

const apiKey = process.env.API_KEY

export const apiConfig = {
  BASE_URL: 'https://api.rawg.io/api',
  GAMES_CATEGORY: '/games',
  GENRE: '&genres=',
  PAGE_SIZE: '&page_size=',
  API_KEY: apiKey,
  genres: [
    'Action',
    'Indie',
    'Adventure',
    'RPG',
    'Strategy',
    'Shooter',
    'Casual',
    'Simulation',
    'Puzzle',
    'Arcade',
    'Platformer',
    'Massively Multiplayer',
    'Racing',
    'Sports',
    'Fighting',
    'Family',
    'Board Games',
    'Educational',
    'Card',
  ],
}
