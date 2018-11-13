import React, { Component } from 'react'
import './index.css'
import context from '../Character/context'

class Skills extends Component {
  constructor (props) {
    super(props)
    this.addSkill = this.addSkill.bind(this)
  }

  addSkill () {
    let skills = this.context.formValues.skills || []
    skills.push({})
    console.log('s', skills)
    const formValues = {
      ...this.context.formValues,
      skills
    }
    this.context.setFormState({formValues})
  }

  render () {
    const skills = (this.context.formValues.skills || [])
    return (
      <div>
        <h3>Skills</h3>
        {skills.map(Skill)}
        <div onClick={this.addSkill}>Add</div>
      </div>
    )
  }
}
Skills.contextType = context

const Skill = () => <div>Skill</div>

export default Skills
