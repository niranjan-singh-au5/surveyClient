import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSurvey, assignToSurvey, employeeId,deleteSurvey } from '../actionCreators/action'

function Survey({ survey, employee, employeeId, empID, isAssigned, assignedSurvey, getSurvey }) {

  //componentDId Mount effect
  useEffect(() => {
    getSurvey()

  }, [])

  useEffect(() => {
    if (!empID) {
      employeeId(empID)
    }

  }, [])
  const handleRemoveSurvey = async(value)=>{
    await deleteSurvey(value,empID)
    employeeId(empID)
  }

  const assignSurvey = (element) => {
    assignToSurvey(element, empID).then(() => employeeId(empID))

  }
  return (
    <div className="columns">
      <div className="column is-primary has-text-centered">
        <h3 className="title is-3">Survey List</h3>
        <table className=" table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Search</th>
              <th><i className="fa fa-search" aria-hidden="true"></i></th>
            </tr>
          </thead>
          <tbody>
            {survey ? survey.map((element, i) => {
              return <tr key={'survey'+i}>
                <td>{element.surveyName}</td>
                <td><button onClick={() => assignSurvey(element)}><i className="fa fa-plus" aria-hidden="true"></i>Add</button></td>
              </tr>
            }):null}
          </tbody>
        </table>
      </div>
      <div className="column has-text-centered ">
        <h3 className="title is-3">Assigned Survey</h3>
        <table className=" table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Search</th>
              <th><i className="fa fa-search" aria-hidden="true"></i></th>
            </tr>
          </thead>
          <tbody>
            {assignedSurvey ? assignedSurvey.map((element, i) => {
            return <tr key={i}>
              <td >{element.surveyName}</td>
              <td ><button><i className="fa fa-plus" aria-hidden="true"></i></button>
                <button onClick={()=>handleRemoveSurvey(element)}><i className="fa fa-minus" aria-hidden="true"></i></button>
              </td>
            </tr>
          }):null}</tbody>
        </table>
      </div>
    </div>)}

const stateToProps = (state) => {
  return {
    survey: state.survey.filteredSurvey,
    empID: state.employee.empID,
    isAssigned: state.survey.isAssigned,
    assignedSurvey: state.survey.assignedSurvey,
    employee: state.employee.employee
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({ getSurvey, employeeId }, dispatch)
}
export default connect(stateToProps, dispatchToProps)(Survey)