import { gql } from 'apollo-server-koa'

export const projectSchema = gql`
  type Project {
    invoiceNumber: String!
    inVoiceDate: String
    name: String!
    date: String
    streetAddress: String
    city: String
    link: String
    status: String #'none' | 'invoice' | 'paid'
    contactPerson: ContactPerson
    user: String!
    expenses: [ExpenseAndIncome]
    incomes: [ExpenseAndIncome]
  }
  type ExpenseAndIncome {
    name: String
    price: Int
    quantity: Int
    taxRate: Int # 0 | 6 | 21
  }
`
