/* eslint-disable class-methods-use-this */
import { prisma } from '../database/prisma'

export type UserSerialized = {
  id: string
  email: string
  created_at: string
}

export default class User {
  public id?: string

  public email!: string

  public created_at?: Date

  constructor(params: { id?: string; email: string; created_at?: Date }) {
    this.id = params.id
    this.email = params.email
    this.created_at = params.created_at
  }

  public static async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  public async create() {
    const user = await prisma.user.create({
      data: {
        email: this.email,
      },
    })
    return user
  }

  public serialize(): UserSerialized {
    return {
      id: this.id ?? '',
      email: this.email,
      created_at: this.created_at?.toISOString() ?? '',
    }
  }
}
