import Fastify from 'fastify'
import AutoLoad from '@fastify/autoload'
import path from 'path'

const fastify = Fastify({
  logger: true,
})

async function main() {
  try {
    await fastify.register(AutoLoad, {
      dir: path.resolve(__dirname, './api/routes'),
      options: {
        prefix: '/api/v1',
      },
    })
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

main()
