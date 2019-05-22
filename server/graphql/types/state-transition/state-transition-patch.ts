import { gql } from 'apollo-server-koa'

export const StateTransitionPatch = gql`
  input StateTransitionPatch {
    name: String
    description: String
  }
`
