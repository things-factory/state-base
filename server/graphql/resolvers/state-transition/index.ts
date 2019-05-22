import { stateTransitionResolver } from './state-transition'
import { stateTransitionsResolver } from './state-transitions'

import { updateStateTransition } from './update-state-transition'
import { createStateTransition } from './create-state-transition'
import { deleteStateTransition } from './delete-state-transition'

export const Query = {
  ...stateTransitionsResolver,
  ...stateTransitionResolver
}

export const Mutation = {
  ...updateStateTransition,
  ...createStateTransition,
  ...deleteStateTransition
}
