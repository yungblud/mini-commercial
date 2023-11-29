import Fastify from 'fastify'
import AutoLoad from '@fastify/autoload'
import path from 'path'
import nconf from 'nconf'

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
    await fastify.register(AutoLoad, {
      dir: path.resolve(__dirname, './api/routes'),
      options: {
        prefix: '/api/v1',
      },
    })
    await fastify.listen({ port: nconf.get('port') })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

main()
