import employeeReducer from './employeeState'
import surveyReducer from './surveyState'
import {combineReducers}  from 'redux'

let rootReducer = combineReducers({
    employee: employeeReducer,survey : surveyReducer
})


export default rootReducer
