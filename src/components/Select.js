import { Field,ErrorMessage } from 'formik'
import React from 'react'
import TextError from './TextError'

export default function Select(props) {
    const{label,name,options,...reset}=props
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as="select" id={name} name={name} {...reset}>
{options.map((option)=>{
    return(
        <option key={option.value} value={option.value}>
            {option.key}
        </option>
    )
})}
        </Field>
        <ErrorMessage name={name} component={TextError}/>


    </div>
  )
}
