import type { Gym } from '@prisma/client'
import type { GymsRepository } from '../gyms-repository'

export class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = []

  async findById(Id: string) {
    const gym = this.items.find(item => item.id === Id)

    if (!gym) {
      return null
    }

    return gym
  }
}
