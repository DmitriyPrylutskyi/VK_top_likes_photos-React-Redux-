/**
 * Created by Dmitriy Prilutsky on 15.12.2016.
 */
import {
  LOGIN_SUCCESS,
  LOGIN_OUT,
  LOGIN_FAIL
} from '../constants/User.jsx'

const initialState = {
  name: '',
  error: ''
}

export default function userstate(state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { ...state, name: action.payload, error: '' }

    case LOGIN_FAIL:
      return { ...state, error: action.payload.message }

    case LOGIN_OUT:
      return { ...state, name: action.payload, error: '' }

    default:
      return state
  }
}