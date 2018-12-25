import { gql } from 'apollo-server-koa'

export const clientSchema = gql`
  type Client {
    firstName: String
    lastName: String
    email: String
    phone: String
    postalCode: String
    address: String
    user: String
  }
  input ClientInput {
    firstName: String
    lastName: String
    email: String
    phone: String
    postalCode: String
    address: String
  }
`