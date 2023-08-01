import { Router } from 'express'
import { loginHandler } from './handler'

export const Register = (router: Router) => {
  router.post('/auth/login' , loginHandler)
}
