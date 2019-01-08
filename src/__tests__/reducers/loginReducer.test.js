import loginReducer from '../../reducers/loginReducer';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../actionTypes/loginActionType';


describe('Login reducer', () => {
  it('should return initial state if an undefined action is passed', () => {
    expect(loginReducer(undefined, { type: 'UNDEFINED_TYPE' })).toEqual({
      loggingIn: false,
      error: '',
      success: '',
      payload: {}
    });
  });

  it('should return a state on login request', () => {
    expect(loginReducer(undefined, {
      type: LOGIN_REQUEST,
      payload: {},
    })).toEqual({
      loggingIn: true,
      error: '',
      success: '',
      payload: {}
    });
  });

  it('should update the state on login success', () => {
    expect(loginReducer(undefined, {
      type: LOGIN_SUCCESS,
      success: 'success',
    })).toEqual({
      loggingIn: false,
      error: '',
      success: 'success',
      payload: {}
    });
  });

  it('should update the state on login failure', () => {
    expect(loginReducer(undefined, {
      type: LOGIN_FAILURE,
      error: 'error',
    })).toEqual({
      loggingIn: false,
      error: 'error',
      success: '',
      payload: {}
    });
  });
});
