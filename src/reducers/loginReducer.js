import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actionTypes/loginActionType';

const initialState = {
  loggingIn: false,
  error: '',
  success: '',
  payload: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_REQUEST:
    return { ...state, logginIn: true, payload: action.payload };
  case LOGIN_SUCCESS:
    return { ...state, logginIn: false, success: action.success };
  case LOGIN_FAILURE:
    return { ...state, loggingIn: false, error: action.error };
  default:
    return state;
  }
};

export default loginReducer;
