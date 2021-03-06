import { ApolloError } from 'apollo-client'
import { Formik, FormikProps } from 'formik'
import * as React from 'react'
import { withRouter } from 'react-router'
import { projectValidationSchemas } from 'src/view/project/helper/validationSchemas'
import {
  ExpenseAndIncomeInput,
  UpdateIncomesAndExpensesComponent
} from 'src/graphql/components/projects'
import { IRouterComponentProps } from 'src/routes/types'
import { SingleProjectChildProps } from '../..'
import EditExpenseAndIncomeForm from './EditIncomesAndExpenseForm'
const { editIncomesSchema, editExpensesSchema } = projectValidationSchemas

export type EditExpenseAndIncomesChildProps = {
  type: 'incomes' | 'expenses'
  selectedModal?: Props['selectedModal']
  values: FormValues
  error?: ApolloError
  loading: boolean
  handleCloseModal: Props['handleCloseModal']
} & FormikProps<FormValues>

interface Props {
  incomes?: ExpenseAndIncomeInput[]
  expenses?: ExpenseAndIncomeInput[]
  selectedModal?: SingleProjectChildProps['selectedModal']
  handleCloseModal: SingleProjectChildProps['handleCloseModal']
}

type FormValues = Pick<Props, 'incomes' | 'expenses'>

class EditExpenseAndIncomeFormContainer extends React.Component<
  Props & IRouterComponentProps
> {
  render() {
    const {
      incomes,
      expenses,
      selectedModal,
      handleCloseModal,
      match: {
        params: { id }
      }
    } = this.props

    if (!incomes && !expenses) return null
    return (
      <UpdateIncomesAndExpensesComponent>
        {(updateProject, { error, loading }) => (
          <Formik
            initialValues={{ incomes, expenses }}
            validateOnChange={false}
            validateOnBlur
            validationSchema={
              !!incomes ? editIncomesSchema : editExpensesSchema
            }
            onSubmit={async (values: FormValues) => {
              const res = await updateProject({
                variables: { data: values, projectId: id }
              })
              console.log(res)
              handleCloseModal()
            }}
            render={(formProps: FormikProps<FormValues>) => {
              return (
                <EditExpenseAndIncomeForm
                  type={!!incomes ? 'incomes' : 'expenses'}
                  selectedModal={selectedModal}
                  error={error}
                  loading={loading}
                  handleCloseModal={handleCloseModal}
                  {...formProps}
                />
              )
            }}
          />
        )}
      </UpdateIncomesAndExpensesComponent>
    )
  }
}

export default withRouter(EditExpenseAndIncomeFormContainer)
