import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Field as FormField } from 'redux-form'

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    {...input}
    {...custom}
  />
)

const Field = ({ label, name }) =>
  <FormField name={name} label={label} component={renderTextField} />

export default Field
