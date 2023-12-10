import { SocialAuthProvider } from './auth'

export type JWTDecoded = {
  provider: SocialAuthProvider
  email: string
  id: string
  iat: number
  exp: number
}

export type JWTPayload = {
  provider: SocialAuthProvider
  email: string
  id: string
}
