import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import history from '../history';
import { SIGNUP_REQUEST } from '../actionTypes/signupActionTypes';
import {
  signupActionSuccess,
  signupActionFailure
} from '../actions/signupActions';

/**
 * Handles the call to sihnup endpoint
 * @param {*} payload User data
 * @returns {promise}
 */
const signupUser = (payload) => {
  return axios.get(`${process.env.API_URL}/auth/signup`, payload);
};

/**
 * The generator function for sign upsaga
 * @param {object} action
 */
export function* signupSaga(action) {
  try {
    const response = yield call(signupUser, action.payload);
    yield put(signupActionSuccess(response.data));
    yield history.push('/');
  } catch (error) {
    yield put(signupActionFailure(error.message));
  }
}

/**
 * The generator watches the signupSaga for event.
 */
export default function* watchSignup() {
  yield takeLatest(SIGNUP_REQUEST, signupSaga);
}
