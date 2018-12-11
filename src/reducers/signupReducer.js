import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actionTypes/signupActionTypes';

const initialState = {
  signingUp: false,
  error: '',
  success: '',
  payload: {}
};


const signupReducer = (state = initialState, action) => {
  switch (action.type) {
  case SIGNUP_REQUEST:
    return { ...state, signingUp: true, payload: action.payload };
  case SIGNUP_SUCCESS:
    return { ...state, signingUp: false, success: action.success };
  case SIGNUP_FAILURE:
    return { ...state, signingUp: false, error: action.error };
  default:
    return state;
  }
};

export default signupReducer;
