import { prisma } from '../database/prisma'

export type AuthTokenSerialized = {
  id: string
  auth_token: string
  refresh_token: string
  user_id: string
  created_at: string
}

export default class AuthToken {
  public id?: string

  public auth_token!: string

  public refresh_token!: string

  public user_id!: string

  public created_at?: Date

  constructor(params: {
    id?: string
    auth_token: string
    refresh_token: string
    user_id: string
    created_at?: Date
  }) {
    this.id = params.id
    this.auth_token = params.auth_token
    this.refresh_token = params.refresh_token
    this.user_id = params.user_id
    this.created_at = params.created_at
  }

  public async create() {
    // eslint-disable-next-line no-return-await
    return await prisma.authToken.create({
      data: {
        auth_token: this.auth_token,
        refresh_token: this.refresh_token,
        user_id: this.user_id,
      },
    })
  }

  public serialize(): AuthTokenSerialized {
    return {
      id: this.id ?? '',
      auth_token: this.auth_token,
      refresh_token: this.refresh_token,
      user_id: this.user_id,
      created_at: this.created_at?.toISOString() ?? '',
    }
  }
}
