import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import initApiRoute from './api/apiEmployee'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//init api route
initApiRoute(app)

//listen
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})