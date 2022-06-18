
import axios from 'axios';
import { SIGN_UP, SIGN_IN, GET_USER_INFO, INFO_VALID, GET_USERS, GET_CATREGORY, GET_CONTENT } from "./constants";


const apiUrlUser = 'http://localhost:3001/users';






export function signUp(payload){
    return async function(dispatch){
        try {
          const response = await axios.post(`${apiUrlUser}/signUp`, payload)
          dispatch({ type: SIGN_UP, payload: response.data.token });
           dispatch({
             type: GET_USER_INFO,
             payload: response.data.userInfo
           });
           return "Account created";

        }catch(error){
            if(error.response.status === 400){
                console.log(error.response.data.message)
                return error.response.data.message
            }
        }
    }
}

export function login(payload){
    return async function(dispatch){
     try {

         const response = await axios.post(`${apiUrlUser}/login`, payload)
         if(response.data.token){
           dispatch({
               type: SIGN_IN,
               payload: response.data.token
           })
           dispatch({
               type: GET_USER_INFO,
               payload: response.data.userInfo
           })
           return response.status;
         }else {
           return response.data.message
         }
     }
     catch(error){
        const array = error.split(" ")
        const status = Number(array[array.length - 1])
                return dispatch({
                    type: 'INFO_VALID',
                    payload: status
                })
     }   

    }
}