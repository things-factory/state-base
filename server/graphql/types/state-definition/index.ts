import { StateDefinition } from './state-definition'
import { NewStateDefinition } from './new-state-definition'
import { StateDefinitionPatch } from './state-definition-patch'

export const Mutation = `
  createStateDefinition (
    stateDefinition: NewStateDefinition!
  ): StateDefinition

  updateStateDefinition (
    id: String!
    patch: StateDefinitionPatch!
  ): StateDefinition

  deleteStateDefinition (
    id: String!
  ): StateDefinition
`

export const Query = `
  stateDefinitions: [StateDefinition]
  stateDefinition(id: String!): StateDefinition
`

export const Types = [StateDefinition, NewStateDefinition, StateDefinitionPatch]
