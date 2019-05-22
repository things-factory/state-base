import { gql } from 'apollo-server-koa'

export const StateDefinition = gql`
  type StateDefinition {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
