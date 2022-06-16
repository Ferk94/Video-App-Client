import { SIGN_UP, SIGN_IN, SIGN_OUT, GET_USER_INFO, INFO_VALID, GET_USERS } from "../actions/constants";

const initialState = {
    token: getTokenLocalStorage(),
    userInfo: {},
    users: [],
    infoValid: false,
    loading: false
    
}

export function getTokenLocalStorage() {
    const token = window.localStorage.getItem("token");
    console.log(JSON.parse(token), 'q hay en el token parseado?')
    return token ? JSON.parse(token) : "";
  }

  export function setTokenLocalStorage(token) {
    window.localStorage.setItem("token", JSON.stringify(token));
  }





export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
            setTokenLocalStorage(action.payload)
            return {
                ...state,
                token: action.payload
            }
        case SIGN_IN:
            setTokenLocalStorage(action.payload)
            return {
                ...state,
                token: action.payload
            }
        case GET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        case SIGN_OUT:
            window.localStorage.remoteItem('token')
            return {
                ...state,
                loading: false,
                userInfo: initialState,
                token: ''                
            }
        default: 
        return state;
    }
}

