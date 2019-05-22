import { getRepository } from 'typeorm'
import { StateDefinition } from '../../../entities'

export const deleteStateDefinition = {
  async deleteStateDefinition(_, { id }) {
    const repository = getRepository(StateDefinition)

    return await repository.delete(id)
  }
}
