import { FastifyPluginCallback } from 'fastify'
import { socialSignInCtrl } from '../controllers/authController'

const authRoute: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/auth/social-signin', socialSignInCtrl)
  done()
}

export default authRoute
