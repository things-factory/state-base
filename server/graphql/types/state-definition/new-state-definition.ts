import { gql } from 'apollo-server-koa'

export const NewStateDefinition = gql`
  input NewStateDefinition {
    name: String!
    description: String
  }
`
