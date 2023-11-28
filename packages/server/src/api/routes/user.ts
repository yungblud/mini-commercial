import { FastifyPluginCallback } from 'fastify'
import { getUserCtrl } from '../controllers/userController'

const userRoute: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/user/:userId', getUserCtrl)
  done()
}

export default userRoute
