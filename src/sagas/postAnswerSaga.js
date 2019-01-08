import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { POST_ANSWER_REQUEST } from
  '../actionTypes/postAnswerActionType.js';
import {
  postAnswerActionSuccess,
  postAnswerActionFailure
} from '../actions/postAnswerAction';
import { getItem } from '../utils/localStorage';

/**
 * Handles the call to post answer endpoint
 * @param {*} payload question data
 * @returns {promise}
 */
const postAnswer = (answer, id) => {
  return axios.post(`${process.env.API_URL}/question/${id}/answer`, {
    answerBody: answer
  }, {
    headers: {
      authorization: `Bearer ${getItem('token')}`
    }
  });
};

/**
 * The generator function for post answer saga
 * @param {object} action
 */
export function* postAnswerSaga(action) {
  try {
    const response = yield call(postAnswer, action.payload.answer, action.payload.id);
    console.log(response.data.answer[0]);
    yield put(postAnswerActionSuccess(response.data.answer[0]));
  } catch (error) {
    yield put(postAnswerActionFailure(error.message));
  }
}

/**
 * The generator watches the postAnswerSaga for event.
 */
export default function* watchPostAnswer() {
  yield takeLatest(POST_ANSWER_REQUEST, postAnswerSaga);
}
