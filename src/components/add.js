import React from 'react'
import {connect} from 'react-redux'
import {getEmployee} from '../actionCreators/action'
function Done({getEmployee}){
    
    const printResponse = ()=>{
      getEmployee("done")
    }
    return(
        <div>
          <div className=" has-text-centered">
          <button className="button is-primary" onClick={()=>printResponse()}>Done</button>
        </div>
        </div>
    )
}

const stateToProps = (state)=>{
  return{
    employee : state.employee.employee
  }
}
export default connect(stateToProps,{getEmployee})(Done)