import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
require('dotenv').config()

// Middleware to parse JSON requests
app.use(express.json())

// Middleware to handle URL-encoded form data
app.use(express.urlencoded({ extended: true }))

// Your static files (if any)
app.use(express.static('public'))

// Import your data routes
const gameRoutes = require('./routes/GameRoutes')

// Use the data routes
app.use('/game', gameRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
