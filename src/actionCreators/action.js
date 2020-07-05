// import {thunk} from 'redux-thunk'
import axios from 'axios'

export const getEmployee = (val) =>{
  
  let data =  axios.get("http://localhost:3010/api/employee")
  return (dispatch)=>{
    data.then((res)=>{
      if(val){
        console.log("done=>",res.data)
      }
        dispatch({
            type:'get-employees',
            payload: res.data
        })
    })
  }
}

//surver rendering

export const getSurvey = () =>{
    let data =  axios.get("http://localhost:3010/api/survey")
    return (dispatch)=>{
      data.then((res)=>{
          dispatch({
              type:'get-survey',
              payload: res.data
          })
      })
    }
}

//fetching specific employee id
export const employeeId = (id)=>{
  
 let data = axios.get(`http://localhost:3010/api/employee/${id}`)
  return (dispatch) =>{
    data.then((res)=>{
      dispatch({
        type:"current-employee",
        payload: res.data,
        id: id
      })
    })
  }
}

//assigning survey

export const assignToSurvey = (survey,empID) =>{
  console.log(survey,empID)
   let data =  axios.post(`http://localhost:3010/api/employee/${empID}`,{
        "id" : survey._id
      })
  return data
}

//delete Survey

export const deleteSurvey = (survey,empID) =>{
   let data =  axios.delete(`http://localhost:3010/api/employee/${survey._id}/${empID}`)
  return data

   
}
