import express from 'express'
const router = express.Router()
import * as Authentication from './authentication/router'


Authentication.Register(router)

export const Router = router
