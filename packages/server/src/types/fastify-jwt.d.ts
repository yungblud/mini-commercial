// fastify-jwt.d.ts
import '@fastify/jwt'
import { JWTPayload } from './jwt'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: JWTPayload // payload type is used for signing and verifying
    // user: {
    //   id: number
    //   name: string
    //   age: number
    // } // user type is return type of `request.user` object
  }
}
