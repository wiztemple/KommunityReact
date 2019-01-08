import {
  loginRequestAction,
  loginActionSuccess,
  loginActionFailure
} from '../../actions/loginAction';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../actionTypes/loginActionType';

describe('Login request action handler', () => {
  it('should return', () => {
    expect(loginRequestAction({})).toEqual({
      type: LOGIN_REQUEST,
      payload: {}
    });
  });
});

describe('Login request success action handler', () => {
  it('should return an object with token payload', () => {
    expect(loginActionSuccess({ token: 'token' })).toEqual({
      type: LOGIN_SUCCESS,
      payload: 'token'
    });
  });
});

describe('Login request failure action handler', () => {
  it('should return an object with error', () => {
    expect(loginActionFailure({ message: 'error' })).toEqual({
      type: LOGIN_FAILURE,
      payload: 'error'
    });
  });
});
