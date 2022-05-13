import React from 'react'
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
function FormikControl(props) {
    const {control, ...reset}=props
  
switch(control)
{
    case 'input':
        return <Input {...reset}/>
        case 'textarea':
            return <TextArea {...reset}/>
            case 'select':
                return <Select {...reset}/>
                case 'radio':
                    case 'checkbox':
                        case 'date':
                            default: return null;
}
}

export default FormikControl