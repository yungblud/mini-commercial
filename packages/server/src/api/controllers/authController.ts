import { RouteHandler } from 'fastify'

export const socialSignInCtrl: RouteHandler<{
  Body: {
    social_token: string
  }
}> = (req, res) => {
  const { social_token: socialToken } = req.body
}
