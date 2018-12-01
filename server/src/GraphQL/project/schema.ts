import { gql } from 'apollo-server-koa'

export const projectSchema = gql`
  type Project {
    id: String!
    invoiceNumber: String!
    inVoiceDate: String
    name: String!
    date: Date
    streetAddress: String
    city: String
    link: String
    status: INVOICE_STATUS
    contactPerson: ContactPerson
    user: String!
    expenses: [ExpenseAndIncome]
    incomes: [ExpenseAndIncome]
  }
  type ExpenseAndIncome {
    name: String
    price: Int
    quantity: Int
    taxRate: Int
  }
  type Query {
    getProjectsByUser(userId: String!): [Project]
  }
  scalar Date
`