import { UseMutationOptions, useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import axiosClient from '@/libs/axiosClient'
import { UserSchema } from '@/models/User'

const FetchSignInBodySchema = z.object({
  social_token: z.string(),
  provider: z.union([z.literal('google'), z.literal('facebook')]),
})
type FetchSignInBodyType = z.infer<typeof FetchSignInBodySchema>

const FetchSignInResponseSchema = z.object({
  refresh_token: z.string(),
  auth_token: z.string(),
  user: UserSchema,
})
type FetchSignInResponseType = z.infer<typeof FetchSignInResponseSchema>

const fetchSignIn = async (params: FetchSignInBodyType) => {
  try {
    const res = await axiosClient.post('/auth/social-signin', params)
    return FetchSignInResponseSchema.parse(res.data)
  } catch (e) {
    console.error(e)
    throw Error('fetchSignIn error')
  }
}

export default function useSignInMutation(
  options?: UseMutationOptions<
    FetchSignInResponseType | undefined,
    Error,
    FetchSignInBodyType
  >
) {
  return useMutation<
    FetchSignInResponseType | undefined,
    Error,
    FetchSignInBodyType
  >({
    mutationFn: fetchSignIn,
    ...options,
  })
}
