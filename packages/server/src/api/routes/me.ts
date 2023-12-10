import { FastifyPluginCallback } from 'fastify'
import { getMeCtrl } from '../controllers/meController'

const meRoute: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.get('/me', getMeCtrl)
  done()
}

export default meRoute
