import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { StateTransition } from '../../../entities'

export const createStateTransition = {
  async createStateTransition(_, { stateTransition: attrs }) {
    const repository = getRepository(StateTransition)
    const newStateTransition = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newStateTransition)
  }
}
