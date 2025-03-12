import { randomUUID } from 'node:crypto'
import type { CheckInsRepository } from '@/repositories/check-ins-repository'
import type { Checkin, Prisma } from '@prisma/client'

export class InMemoryCheckInsRepository implements CheckInsRepository {
  public items: Checkin[] = []

  async create(data: Prisma.CheckinUncheckedCreateInput) {
    const checkIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id,
      validated_at: data.validated_at ? new Date(data.validated_at) : null,
      created_at: new Date(),
    }

    this.items.push(checkIn)

    return checkIn
  }
}
