import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actionTypes/signupActionTypes';

export const signupRequestAction = payload => ({
  type: SIGNUP_REQUEST,
  payload
});

export const signupActionSuccess = response => ({
  type: SIGNUP_SUCCESS,
  success: response.message
});

export const signupActionFailure = response => ({
  type: SIGNUP_FAILURE,
  error: response.message
});
