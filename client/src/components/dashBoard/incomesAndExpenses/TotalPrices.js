import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import React, { Fragment } from 'react'
import { currentPeriodIncomeAndTaxDetails } from '../libs/calculatePriceAndTax'
import { Paper } from '@material-ui/core'

const TotalPrices = ({ projects }) => {
  const incomeAndExpenseDetails = currentPeriodIncomeAndTaxDetails(projects)
  const details0 = incomeAndExpenseDetails['0']
  const details6 = incomeAndExpenseDetails['6']
  const details21 = incomeAndExpenseDetails['21']

  return (
    <Paper style={{ overflowX: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Incomes</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Expenses</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Gross Income</TableCell>
            <TableCell>
              {details0.incomes + details6.incomes + details21.incomes}
            </TableCell>
            <TableCell>Gross Expense</TableCell>
            <TableCell>
              {details0.expenses + details6.expenses + details21.expenses}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Income Tax 0%</TableCell>
            <TableCell>{details0.incomesTax}</TableCell>
            <TableCell>Expense Tax 0%</TableCell>
            <TableCell>{details0.expensesTax}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Income Tax 6%</TableCell>
            <TableCell>{details6.incomesTax}</TableCell>
            <TableCell>Expense Tax 6%</TableCell>
            <TableCell>{details6.expensesTax}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Income Tax 21%</TableCell>
            <TableCell>{details21.incomesTax}</TableCell>
            <TableCell>Expense Tax 21%</TableCell>
            <TableCell>{details21.expensesTax}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Income Tax Total</TableCell>
            <TableCell>
              {details0.incomesTax + details6.incomesTax + details21.incomesTax}
            </TableCell>
            <TableCell>Expense Tax Total</TableCell>
            <TableCell>
              {details0.expensesTax +
                details6.expensesTax +
                details21.expensesTax}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Total Payment</TableCell>
            <TableCell>
              {details0.incomesTax +
                details6.incomesTax +
                details21.incomesTax -
                (details0.expensesTax +
                  details6.expensesTax +
                  details21.expensesTax)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
}

export default TotalPrices
