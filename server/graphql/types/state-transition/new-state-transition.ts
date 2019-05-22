import { gql } from 'apollo-server-koa'

export const NewStateTransition = gql`
  input NewStateTransition {
    name: String!
    description: String
  }
`
