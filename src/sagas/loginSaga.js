import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../actionTypes/loginActionType';
import {
  loginActionSuccess,
  loginActionFailure
} from '../actions/loginAction';
import { getUserCredentials } from '../utils/localStorage';

/**
 * Handles the call to login endpoint
 * @param {*} payload User data
 * @returns {promise}
 */
const loginUser = (payload) => {
  return axios.post(`${process.env.API_URL}/auth/login`, payload);
};

/**
 * The generator function for login saga
 * @param {object} action
 */
export function* loginSaga(action) {
  try {
    const response = yield call(loginUser, action.payload);
    getUserCredentials(response.data.data);
    yield put(loginActionSuccess(response.data));
  } catch (error) {
    yield put(loginActionFailure(error.message));
  }
}

/**
 * The generator watches the loginSaga for event.
 */
export default function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
