import { RouteHandler } from 'fastify'
import { OAuth2Client } from 'google-auth-library'
import User from '../models/User'
import AuthToken from '../models/AuthToken'

const client = new OAuth2Client()

export const socialSignInCtrl: RouteHandler<{
  Body: {
    social_token: string
    provider: 'google'
  }
}> = async (req, res) => {
  const { social_token: socialToken, provider } = req.body
  try {
    if (provider === 'google') {
      const tokenInfo = await client.getTokenInfo(socialToken)
      const { email: gmail } = tokenInfo
      if (!gmail) {
        throw Error('cannot get gmail')
      }
      let user = await User.findByEmail(gmail)
      if (!user) {
        user = await new User({
          email: gmail,
        }).create()
      }
      const authToken = new AuthToken({
        auth_token: await res.jwtSign(
          {
            provider,
            email: user.email,
            id: user.id,
          },
          {
            expiresIn: '7d',
          }
        ),
        refresh_token: await res.jwtSign(
          {
            provider,
            email: user.email,
            id: user.id,
          },
          {
            expiresIn: '30d',
          }
        ),
        user_id: user.id,
      })
      const { refresh_token, auth_token } = await authToken.create()

      return res.status(200).send({
        refresh_token,
        auth_token,
        user,
      })
    }
    return res.status(404).send()
  } catch (e) {
    console.error(e)
    return res.status(500).send()
  }
}
