import registerReducer from '../../reducers/signupReducer';
import * as types from '../../actionTypes/signupActionTypes';


const payload = {
  username: 'wizsurlivan',
  email: 'wiztemple@gmail.com',
  password: 'letitgobyjamesbay'
};

const initialState = {
  signingUp: false,
  error: '',
  success: '',
  payload: {}
};

describe('Register user reducer: ', () => {
  it('should have a default state', () => {
    expect(registerReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(initialState);
  });

  it('should update the reducer state', () => {
    expect(registerReducer(undefined, {
      type: types.SIGNUP_REQUEST,
      payload,
    })).toEqual({
      ...initialState,
      signingUp: true,
      payload,
    });
  });

  it('should update the register', () => {
    expect(registerReducer(undefined, {
      type: types.SIGNUP_SUCCESS,
      payload: 'Signup successful'
    })).toEqual({
      ...initialState,
      success: 'Signup successful'
    });
  });

  it('should add error to register state', () => {
    expect(registerReducer(undefined, {
      type: types.SIGNUP_FAILURE,
      error: 'Bad request'
    })).toEqual({
      ...initialState,
      error: 'Bad request',
    });
  });
});
