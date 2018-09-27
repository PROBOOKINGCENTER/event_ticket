import React from 'react';
import {  FormGroup, Label, Input, FormFeedback, } from 'reactstrap';

const renderField = ({input, label, type, autoFocus, placeholder, required, meta: {touched, error} })=>{   
        return (
            <FormGroup> 
                <Label>{label}{required ? '*': null}</Label>
                <Input {...input} invalid={touched && error && true} type={type} placeholder={placeholder} autoFocus={autoFocus} />
                {touched  && error && <FormFeedback tooltip>{error}</FormFeedback>}
            </FormGroup>
        )
}
export default renderField