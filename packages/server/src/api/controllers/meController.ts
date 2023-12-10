import { FastifyError, RouteHandler } from 'fastify'
// import { JWTDecoded } from '../../types/jwt'

export const getMeCtrl: RouteHandler<{}> = async (req, rep) => {
  try {
    await req.jwtVerify()
    // const decoded = (await req.jwtDecode()) as JWTDecoded
    // todo find user by auth token
    return rep.status(501)
  } catch (e) {
    const error = e as FastifyError
    return rep.status(error.statusCode ?? 500).send(error)
  }
}
