import { getRepository } from 'typeorm'
import { StateTransition } from '../../../entities'

export const updateStateTransition = {
  async updateStateTransition(_, { id, patch }) {
    const repository = getRepository(StateTransition)

    const stateTransition = await repository.findOne({ id })

    return await repository.save({
      ...stateTransition,
      ...patch
    })
  }
}
