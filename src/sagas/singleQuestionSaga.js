import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { SINGLE_QUESTION_REQUEST } from
  '../actionTypes/singleQuestionActionType';
import {
  singleQuestionActionSuccess,
  singleQuestionActionFailure
} from '../actions/singleQuestionAction';

const fetchSingleQuestion = (id) => {
  return axios.get(`${process.env.API_URL}/question/${id}`);
};

/**
 * The generator function for single question saga
 * @param {object} action
 */
export function* singleQuestionSaga(action) {
  try {
    const { data: { questions } } = yield call(fetchSingleQuestion(action.payload));
    yield put(singleQuestionActionSuccess(questions));
  } catch (error) {
    yield put(singleQuestionActionFailure(error.message));
  }
}

/**
 * The generator watches the singleQuestionSaga for event.
 */
export default function* watchSingleQuestionSaga() {
  yield takeLatest(SINGLE_QUESTION_REQUEST, singleQuestionSaga);
}
