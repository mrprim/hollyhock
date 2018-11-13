import React, { Component } from 'react'
import './index.css'
import Summary from '../Summary'
import Skills from '../Skills'
import context from './context'

const CharacterContext = context

class Character extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formValues: {},
      setFormState: this.setFormState.bind(this)
    }
  }

  setFormState (data) {
    this.setState(data)
  }

  render () {
    return (
      <div>
        <CharacterContext.Provider value={this.state}>
          <Summary />
          <Skills />
        </CharacterContext.Provider>
        <div>
          {JSON.stringify(this.state)}
        </div>
      </div>
    )
  }
}

export default Character
