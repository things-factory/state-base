import { getRepository } from 'typeorm'
import { StateTransition } from '../../../entities'

export const deleteStateTransition = {
  async deleteStateTransition(_, { id }) {
    const repository = getRepository(StateTransition)

    return await repository.delete(id)
  }
}
