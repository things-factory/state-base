import * as StateTransition from './state-transition'
import * as StateDefinition from './state-definition'

export const queries = [StateTransition.Query, StateDefinition.Query]

export const mutations = [StateTransition.Mutation, StateDefinition.Mutation]

export const types = [...StateTransition.Types, ...StateDefinition.Types]
