import React from 'react'
import {Field,ErrorMessage} from 'formik';
import TextError from './TextError';

function Input(props) {
    const {label,name,...reset}=props
  return (
<div className='form-control'>
    <label htmlFor={name} >{label}</label>
    <Field id={name} name={name} {...reset}/>
    <ErrorMessage name={name} component={TextError}/>

</div>
  )
}

export default Input