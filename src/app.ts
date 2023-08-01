import express, { Express, Request, Response, NextFunction } from 'express'
import { Router } from './routes'
import { RESPONSE_CODE } from './constants/response-codes'


// Create Express server
const app: Express = express()
const port: number = 4000

// Express configuration
app.set('port', port || 4000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(Router)

app.all('/', function (req, res) {
    return res.status(200).send({ data: 'Hello world' })
})

app.use((req, res, next) => {
    // next(createError(404))
    // next({ status: RESPONSE_CODE.URL_NOT_FOUND.HTTP_STATUS, message: RESPONSE_CODE.URL_NOT_FOUND.MESSAGE, type: 'invalid-url' })
    next(res.status(RESPONSE_CODE.URL_NOT_FOUND.HTTP_STATUS).json({
        code: RESPONSE_CODE.URL_NOT_FOUND.CODE,
        message: RESPONSE_CODE.URL_NOT_FOUND.MESSAGE,
    }))
})

export default app
