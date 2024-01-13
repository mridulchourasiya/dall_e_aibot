import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'


dotenv.config()
const app = express();
app.use(cors())
// Imports routes for each model (table) of the database
app.use(express.json({limit: '50mb'}))

app.get('/', async (req, res) =>{
    res.send('hello world')
})

const startServer = async () => {
    app.listen(8080, () => console.log('server runnig on http://localhost:8080'))
}

startServer()