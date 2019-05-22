import { gql } from 'apollo-server-koa'

export const StateDefinitionPatch = gql`
  input StateDefinitionPatch {
    name: String
    description: String
  }
`
