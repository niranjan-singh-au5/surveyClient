

function employeeReducer(state={selectEmployee:'',employee:[]}, action){
   
   let stateCopy = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "get-employees":
            stateCopy.employee = action.payload
            stateCopy.empID = action.payload[0]._id
            return stateCopy
       case 'current-employee':
        stateCopy.empID = action.id
        return stateCopy
         default:
             return stateCopy
    }
}

export default employeeReducer