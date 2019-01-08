import {
  signupRequestAction,
  signupActionSuccess,
  signupActionFailure
} from '../../actions/signupActions';

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../../actionTypes/signupActionTypes';

const userData = {
  userName: 'wizsurlivan',
  email: 'wiztemple@gmail.com',
  password: 'letitgobyjamesbay'
};

describe('Register Action', () => {
  it('should return the correct action', () => {
    expect(signupRequestAction(userData)).toEqual({
      type: SIGNUP_REQUEST,
      payload: userData
    });
  });
});
describe('Register Action Success', () => {
  it('should return the correct action', () => {
    expect(signupActionSuccess({ message: 'success' })).toEqual({
      type: SIGNUP_SUCCESS,
      success: 'success'
    });
  });
});
describe('Register Action Failure', () => {
  it('should return the correct action', () => {
    expect(signupActionFailure({ message: 'Bad request' })).toEqual({
      type: SIGNUP_FAILURE,
      error: 'Bad request'
    });
  });
});
