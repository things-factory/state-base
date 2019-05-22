import { getRepository } from 'typeorm'
import { StateTransition } from '../../../entities'

export const stateTransitionsResolver = {
  async stateTransitions() {
    const repository = getRepository(StateTransition)

    return await repository.find()
  }
}
