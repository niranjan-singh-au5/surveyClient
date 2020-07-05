


function surveyReducer(state={assignedSurvey:"",isAssigned:0}, action){
   
    let  stateCopy = JSON.parse(JSON.stringify(state))
    switch(action.type){
          case 'get-survey':
             stateCopy.survey = action.payload
             stateCopy.filteredSurvey = action.payload
             return stateCopy
          case 'current-employee':
              stateCopy.assignedSurvey = action.payload.assignedSurvey
              const assignedSurveyIds = action.payload.assignedSurvey.map(el=>el._id)
              stateCopy.filteredSurvey = stateCopy.survey.filter((el)=>!assignedSurveyIds.includes(el._id))
              return stateCopy
        case 'assign-survey':
            stateCopy.isAssigned = state.isAssigned+1
            return stateCopy
         default:
             return stateCopy
    }
}

export default surveyReducer