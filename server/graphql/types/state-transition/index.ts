import { StateTransition } from './state-transition'
import { NewStateTransition } from './new-state-transition'
import { StateTransitionPatch } from './state-transition-patch'

export const Mutation = `
  createStateTransition (
    stateTransition: NewStateTransition!
  ): StateTransition

  updateStateTransition (
    id: String!
    patch: StateTransitionPatch!
  ): StateTransition

  deleteStateTransition (
    id: String!
  ): StateTransition
`

export const Query = `
  stateTransitions: [StateTransition]
  stateTransition(id: String!): StateTransition
`

export const Types = [StateTransition, NewStateTransition, StateTransitionPatch]
