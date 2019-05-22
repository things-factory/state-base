import { stateDefinitionResolver } from './state-definition'
import { stateDefinitionsResolver } from './state-definitions'

import { updateStateDefinition } from './update-state-definition'
import { createStateDefinition } from './create-state-definition'
import { deleteStateDefinition } from './delete-state-definition'

export const Query = {
  ...stateDefinitionsResolver,
  ...stateDefinitionResolver
}

export const Mutation = {
  ...updateStateDefinition,
  ...createStateDefinition,
  ...deleteStateDefinition
}
