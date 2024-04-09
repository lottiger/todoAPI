import express from 'express'
import cors from 'cors'
import dbConnect from './server.js'
import todoRoutes from './routes/todoRoutes.js'
import { errorHandler, notFound } from './errors.js'



const app = express()


app.use(cors())

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Server running on port: ' + PORT))

dbConnect()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/todos', todoRoutes)


app.use(notFound)
app.use(errorHandler)

export default app