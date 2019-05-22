import { gql } from 'apollo-server-koa'

export const StateTransition = gql`
  type StateTransition {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
