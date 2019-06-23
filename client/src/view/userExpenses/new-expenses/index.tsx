import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Field, Form, Formik, FormikProps } from 'formik'
import React, { FC, useState, Fragment } from 'react'
import {
  useAddUserExpenseMutation,
  UserExpenseInput
} from 'src/graphql/components/userExpenses'
import { renderTaxRateField } from 'src/libs/forms/renderFields/renderDropdown'
import { renderFormikTextField } from 'src/libs/forms/renderFields/renderTextField'
import { StyledGridFormItem } from 'src/styles/forms'
import Typography from '@material-ui/core/Typography'
import { renderDatePicker } from 'src/libs/forms/renderFields/renderDatePicker'
import { GenerateFieldSettings } from 'src/view/project/helper/genrateFieldSettings'

const NewUserExpense: FC<{}> = () => {
  const [error, setError] = useState('')
  const mutation = useAddUserExpenseMutation()

  return (
    <Formik
      initialValues={{
        name: '',
        date: '',
        quantity: 0,
        price: '',
        taxRate: 0
      }}
      onSubmit={async values => {
        try {
          await mutation({ variables: { data: values } })
        } catch (e) {
          setError(e.message)
        }
      }}
    >
      {(props: FormikProps<UserExpenseInput>) => {
        return (
          <Form>
            <StyledGridFormItem justify="center" container>
              {GenerateFieldSettings.userExpenseFiled.map((form, i) => (
                <Fragment key={i}>
                  {form.name === 'taxRate' && (
                    <Grid item>
                      {renderTaxRateField({
                        value: props.values.taxRate || 0,
                        name: form.name,
                        showLabel: true,
                        onChange: props.handleChange
                      })}
                    </Grid>
                  )}
                  {form.name === 'date' && (
                    <Fragment>
                      {renderDatePicker({
                        field: form,
                        values: props.values,
                        setFieldValue: props.setFieldValue,
                        error: ''
                      })}
                    </Fragment>
                  )}
                  {!form.name.match(/(date|taxRate)/) && (
                    <Grid item style={{ width: 180 }}>
                      <Field
                        name={form.name}
                        label={form.label || form.name}
                        type={form.type || 'text'}
                        component={renderFormikTextField}
                      />
                    </Grid>
                  )}
                </Fragment>
              ))}
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ margin: '4em auto 2em' }}
                >
                  Submit
                </Button>
              </Grid>
              {error && (
                <Grid item>
                  <Typography color="error">{error}</Typography>
                </Grid>
              )}
            </StyledGridFormItem>
          </Form>
        )
      }}
    </Formik>
  )
}

export default NewUserExpense
