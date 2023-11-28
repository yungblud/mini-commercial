import { RouteHandler } from 'fastify'

export const getUserCtrl: RouteHandler<{
  Params: {
    userId: string
  }
}> = (req, res) =>
  res.status(200).send({
    status: 'okay',
  })
