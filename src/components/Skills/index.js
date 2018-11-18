import React from 'react'
import Field from '../Field'
import { FieldArray } from 'redux-form'

const Skills = () =>
  <div>
    <h3>Skills</h3>
    <FieldArray name='skills' component={SkillArray} />
  </div>

const SkillArray = ({ fields }) =>
  <ul>
    <li onClick={() => fields.push()}>Add</li>
    { fields.map(renderSkill(fields)) }
  </ul>

const renderSkill = fields => (member, i) =>
  <li key={member}>
    <Field name={`${member}.name`} label='name' />
    <span onClick={() => fields.remove(i)}>X</span>
  </li>

export default Skills
