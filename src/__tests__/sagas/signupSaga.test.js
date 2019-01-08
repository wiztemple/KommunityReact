import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mockAxios from '../../../__mocks__/axios';
import rootSaga from '../../sagas';

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS
} from '../../actionTypes/signupActionTypes';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Register user Saga:', () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 200,
      message: 'success',
      data: {}
    }
  }));

  it('should execute saga workers', (done) => {
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
      { type: SIGNUP_REQUEST },
      { type: SIGNUP_SUCCESS, payload: 'success' }
    ];

    store.dispatch({ type: SIGNUP_REQUEST });

    store.subscribe(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
      done();
    });
  });
});
