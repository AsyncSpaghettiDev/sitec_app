import express from 'express'
const api = express.Router()

// Routes
import students from './routes/students.route'

// Api routes
api.use('/students', students)

export default api