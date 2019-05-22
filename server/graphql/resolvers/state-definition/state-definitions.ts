import { getRepository } from 'typeorm'
import { StateDefinition } from '../../../entities'

export const stateDefinitionsResolver = {
  async stateDefinitions() {
    const repository = getRepository(StateDefinition)

    return await repository.find()
  }
}
