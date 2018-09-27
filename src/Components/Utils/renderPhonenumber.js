import React, { Component } from 'react'
import {  FormGroup, Label, Input, FormFeedback, } from 'reactstrap';

 class renderPhonenumber extends Component {
     constructor(props){
         super(props)
         this.state={
             value:''
         }
         this.phoneMask = this.phoneMask.bind(this)
     }
      phoneMask(e) { 
        var num = e.target.value.replace(/\D/g,''); 
       
        this.setState({
            value:(num.substring(0,1) + '(' + num.substring(1,3) + ')-' + num.substring(3,6) + '-' + num.substring(6,10))
        })
    }
    
  render() {
      const {input, label, type, autoFocus, placeholder, required, meta:{touched, error}} = this.props
    return (
        <FormGroup> 
        <Label>{label}{required ? '*': null}</Label>
        <Input {...input} value={this.state.value} onChange={this.phoneMask} invalid={touched && error && true} type={type} placeholder={placeholder} autoFocus={autoFocus} />
        {touched  && error && <FormFeedback tooltip>{error}</FormFeedback>}
        </FormGroup>
    )
  }
  
}



export default renderPhonenumber