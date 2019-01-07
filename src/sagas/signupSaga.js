import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { SIGNUP_REQUEST } from '../actionTypes/signupActionTypes';
import {
  signupActionSuccess,
  signupActionFailure
} from '../actions/signupActions';
import { getUserCredentials } from '../utils/localStorage';

/**
 * Handles the call to signup endpoint
 * @param {*} payload User data
 * @returns {promise}
 */
const signupUser = (payload) => {
  return axios.post(`${process.env.API_URL}/auth/signup`, payload);
};

/**
 * The generator function for sign up saga
 * @param {object} action
 */
export function* signupSaga(action) {
  try {
    const response = yield call(signupUser, action.payload);
    getUserCredentials(response.data.data);
    yield put(signupActionSuccess(response.data));
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
