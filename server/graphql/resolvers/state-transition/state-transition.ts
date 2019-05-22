import { getRepository } from 'typeorm'
import { StateTransition } from '../../../entities'

export const stateTransitionResolver = {
  async stateTransition(_, { id }, context, info) {
    const repository = getRepository(StateTransition)

    return await repository.findOne(
      { id },
      {
        relations: ['stateTransitionDetails']
      }
    )
  }
}
