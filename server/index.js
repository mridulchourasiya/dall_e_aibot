import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config()
const app = express();
app.use(cors())
// Imports routes for each model (table) of the database
app.use(express.json({limit: '50mb'}))


app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) =>{
    res.send('hello world')
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL)
         app.listen(8080, () => console.log('server runnig on http://localhost:8080'))
    } catch (error) {
       console.log(error)   
    }
   
}

startServer()