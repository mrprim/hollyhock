import React from 'react'
import './index.css'
import Field from '../Field'

const Summary = () =>
  <div>
    <Field label='Name' name='name' />
    <Field label='Title' name='title' />
    <Field label='Academics Skill' name='academicsSkill' />
    <Field label='Sports Skill' name='sportsSkill' />
    <Field label='Blood Type' name='bloodType' />
    <Field label='Animal' name='animal' />
    <Field label='Age' name='age' />
  </div>

export default Summary
