import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'


function TextArea(props) {
    const {label,name,...reset}=props
  return (
      <div className='form-control'>
    <label htmlFor={name}>{label}</label>
    <Field as="textarea"  name={name} {...reset}  />
    <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default TextArea