export type UserSerialized = {
  id: string
  email: string
  created_at: string
}
export default class User {
  public id!: string

  public email!: string

  public created_at!: Date

  constructor(params: User) {
    this.id = params.id
    this.email = params.email
    this.created_at = params.created_at
  }

  public serialize(): UserSerialized {
    return {
      id: this.id,
      email: this.email,
      created_at: this.created_at.toISOString(),
    }
  }
}
