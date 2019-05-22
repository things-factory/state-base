import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { StateDefinition } from '../../../entities'

export const createStateDefinition = {
  async createStateDefinition(_, { stateDefinition: attrs }) {
    const repository = getRepository(StateDefinition)
    const newStateDefinition = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newStateDefinition)
  }
}
