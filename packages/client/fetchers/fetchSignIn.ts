import { z } from 'zod'
import { UserSchema } from '@/models/User'
import axiosClient from '@/libs/axiosClient'

const FetchSignInBodySchema = z.object({
  social_token: z.string(),
  provider: z.union([z.literal('google'), z.literal('facebook')]),
})
export type FetchSignInBodyType = z.infer<typeof FetchSignInBodySchema>

const FetchSignInResponseSchema = z.object({
  refresh_token: z.string(),
  auth_token: z.string(),
  user: UserSchema,
})
export type FetchSignInResponseType = z.infer<typeof FetchSignInResponseSchema>

const fetchSignIn = async (params: FetchSignInBodyType) => {
  try {
    const res = await axiosClient.post('/auth/social-signin', params)
    return FetchSignInResponseSchema.parse(res.data)
  } catch (e) {
    console.error(e)
    throw Error('fetchSignIn error')
  }
}

export default fetchSignIn
