import Fastify from 'fastify'
import AutoLoad from '@fastify/autoload'
import path from 'path'
import nconf from 'nconf'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'

const fastify = Fastify({
  ignoreTrailingSlash: true,
  logger: {
    level: 'info',
  },
})

async function loadSettings() {
  return new Promise<void>((resolve, reject) => {
    try {
      nconf.file({
        file: path.resolve(__dirname, './config/config.json'),
      })
      resolve()
    } catch (e) {
      reject(e)
    }
  })
}

async function main() {
  try {
    await loadSettings()
    await fastify.register(cors, {
      origin:
        process.env.NODE_ENV === 'development'
          ? ['http://localhost:3000']
          : ['https://store.coldsurf.io'],
      preflight: true,
      methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'],
    })
    await fastify.register(AutoLoad, {
      dir: path.resolve(__dirname, './api/routes'),
      options: {
        prefix: '/api/v1',
      },
    })
    await fastify.register(jwt, {
      secret: nconf.get('secrets').jwt,
    })

    await fastify.listen({ port: nconf.get('port'), host: '0.0.0.0' })
    fastify.log.info('server started', process.env.NODE_ENV)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

main()
