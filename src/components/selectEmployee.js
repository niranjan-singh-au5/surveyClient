import React, {useEffect } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators}   from 'redux'
import {getEmployee,employeeId} from '../actionCreators/action'
function Employee(props){
  
  let {employee,employeeId} = props

  useEffect(() => {
    props.getEmployee()
   
  },[])

  useEffect(()=>{
    if(employee.length){
    employeeId(employee[0]._id)}
  },[employee.length])

  return(
    <div className="notification has-text-centered">
    <h3 className="title is-3">Select Employee</h3>
    <div className="control">
          <div className="select">
            <select  onChange ={(e)=>employeeId(e.target.value)} >

          {employee && employee.map((name,i) =>{
             return (
             <option  value={name._id} key={i}>{name.empName}</option>
             )
          })}
            </select>
          </div>
        </div>
     </div>
  )
}

const stateToProps = (state) =>{
  
  return {
     employee : state.employee.employee
  }
}

const dispatchToProps = (dispatch)=>{
  return bindActionCreators({getEmployee,employeeId},dispatch)
}

export default connect(stateToProps,dispatchToProps)(Employee)