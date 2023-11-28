import Fastify from 'fastify'
import AutoLoad from '@fastify/autoload'
import path from 'path'

const fastify = Fastify({
  logger: true,
})

fastify.route({
  method: 'GET',
  url: '/',
  schema: {
    // request needs to have a querystring with a `name` parameter
    querystring: {
      type: 'object',
      properties: {
        name: { type: 'string' },
      },
      required: ['name'],
    },
    // the response needs to be an object with an `hello` property of type 'string'
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
        },
      },
    },
  },
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => ({ hello: 'world' }),
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
