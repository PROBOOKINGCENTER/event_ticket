import React, { Component } from 'react'
import { Route } from 'react-router';
import { Error404 } from './Error404';
import { connect } from 'react-redux'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'
import renderField from '../Components/Utils/renderFields';
import renderPhonenumber from '../Components/Utils/renderPhonenumber';
import queryString from 'query-string'
import {saveTicket} from '../redux/Actions/Ticket';
class Ticket extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.props.initialize({company_id:parsed.company_id,event_id:this.props.match.params.month})
  }
  handleSubmit(values){
    this.props.dispatch(saveTicket(values))
  }
  render() {
    const { match,location,submitting,handleSubmit,pristine,reset,ticket } = this.props
   
    return (
      <div>
        <h1>Ticket</h1>
        <Form onSubmit={handleSubmit(this.handleSubmit)}>
          <Row >
            <Col md={6}>
              <Field  name="first_name" component type="text" component={renderField} placeholder="กรุณาป้อนชื่อ" label="ชื่อ"  required/>
            </Col>
            <Col md={6}>
              <Field name="last_name" type="text" component={renderField}  label="นามสกุล" placeholder="นามสกุล" required/>
            </Col>
          </Row>
            <Field name="nickname" type="text" component={renderField} label="ชื่อแทน" placeholder="ชื่อเล่น" required />
            <Field name="email" type="text" component={renderField} label="E-mail" required  placeholder="ตัวอย่าง example@email.com"/>
            <Row >
              <Col md={6}>
            <Field name="phone_num" type="text" component={renderPhonenumber} label="เบอร์โทรศัพท์"  required placeholder="ตัวอย่าง 0(88)223-2323"/>
              </Col>
              <Col md={6}>
                <Field name="line_id" type="text" component={renderField} label="Line Id"   placeholder="ไลน์ไอดีสำหรับติดต่อกลับ (ถ้ามี)"/>
              </Col>
            </Row>
            <Field name="company_name"  type="text" component={renderField} label="ชื่อบริษัท" placeholder="บริษัทของคุณ" />
            
          <Button type="submit"  disabled={submitting}>ลงทะเบียน</Button>
        </Form>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    ticket: state.ticketReducers.ticket
  }
}
function validate  (values){
  let errors = {};
  if(!values.first_name){
    errors.first_name = "ต้องการฟิลด์นี้"
  }
  if(!values.last_name){
    errors.last_name = "ต้องการฟิลด์นี้"
  }
  if(!values.nickname){
    errors.nickname  = "ต้องการฟิลด์นี้"
  }
  if(!values.email){
    errors.email ="ต้องการฟิลด์นี้"

  }else if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,4}/i.test(values.email)){
    errors.email ="คุณป้อนอีเมลไม่ถูกรูปแบบ"
  } 
  if(!values.company_name){
    errors.company_name = "ต้องการฟิลด์นี้"
  }
  if(!values.phone_num){
    errors.phone_num ="ต้องการฟิลด์นี้"
  }else if(values.phone_num && !/[0-9]{1}\([0-9]{2}\)\-[0-9]{3}\-[0-9]{4}/i.test(values.phone_num)){
    errors.phone_num = "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง"
  }
  return errors
}
const form = reduxForm({
  form:'Ticket',
  validate
})

Ticket = connect(mapStateToProps)(Ticket)
export default  form(Ticket)