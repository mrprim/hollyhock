import React, { Component } from 'react'
import './index.css'
import TextField from '@material-ui/core/TextField'
import context from '../Character/context'

class Field extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.setValue = this.setValue.bind(this)
  }

  onChange (ev) {
    const props = this.props
    let value = ev.target.value

    if (props.filter) {
      value = props.filter(value)
    }
    this.setValue(value)
  }

  setValue (val) {
    const props = this.props
    const formValues = {
      ...this.context.formValues,
      [props.name]: val
    }
    this.context.setFormState({formValues})
  }

  render () {
    const { label, name } = this.props

    return (
      <TextField
        label={label}
        name={name}
        value={this.context.formValues[name] || ''}
        onChange={this.onChange} />
    )
  }
}
Field.contextType = context

export default Field
