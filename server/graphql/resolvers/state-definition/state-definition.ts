import { getRepository } from 'typeorm'
import { StateDefinition } from '../../../entities'

export const stateDefinitionResolver = {
  async stateDefinition(_, { id }, context, info) {
    const repository = getRepository(StateDefinition)

    return await repository.findOne(
      { id },
      {
        relations: ['stateDefinitionDetails']
      }
    )
  }
}
