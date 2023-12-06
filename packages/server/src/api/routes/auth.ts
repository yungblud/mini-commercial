import { FastifyPluginCallback } from 'fastify'
import { socialSignInCtrl } from '../controllers/authController'

const authRoute: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.post('/auth/social-signin', socialSignInCtrl)
  done()
}

export default authRoute
