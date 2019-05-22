import { getRepository } from 'typeorm'
import { StateDefinition } from '../../../entities'

export const updateStateDefinition = {
  async updateStateDefinition(_, { id, patch }) {
    const repository = getRepository(StateDefinition)

    const stateDefinition = await repository.findOne({ id })

    return await repository.save({
      ...stateDefinition,
      ...patch
    })
  }
}
