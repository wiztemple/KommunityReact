import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actionTypes/loginActionType';

export const loginRequestAction = payload => ({
  type: LOGIN_REQUEST,
  payload
});

export const loginActionSuccess = response => ({
  type: LOGIN_SUCCESS,
  payload: response.message
});

export const loginActionFailure = response => ({
  type: LOGIN_FAILURE,
  error: response.message
});
