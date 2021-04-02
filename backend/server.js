import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import activityRoutes from './routes/activityRoutes.js'


dotenv.config()

connectDB()

const app = express();

//body parser
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running ...')
})

// mount routes
app.use('/api/users', userRoutes)
app.use('/api/activities', activityRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))