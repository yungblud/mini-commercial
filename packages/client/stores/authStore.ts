import { create } from 'zustand'

export const useAuthStore = create<{
  authToken?: string
  refreshToken?: string
  // eslint-disable-next-line no-unused-vars
  login: (params: { authToken?: string; refreshToken?: string }) => void
}>((set) => ({
  authToken: undefined,
  refreshToken: undefined,
  login: (params) => set(params),
}))
