import axios from 'axios';

import { takeLatest, call, put } from 'redux-saga/effects';
import { QUESTIONS_REQUEST } from '../actionTypes/questionsActionType';
import {
  questionsActionSuccess,
  questionsActionFailure
} from '../actions/questionsAction';

const fetchQuestions = () => {
  return axios.get(`${process.env.API_URL}/question`);
};

/**
 * The generator function for questions saga
 * @param {object} action
 */
export function* questionsSaga() {
  try {
    const { data: { questions } } = yield call(fetchQuestions);
    yield put(questionsActionSuccess(questions));
  } catch (error) {
    yield put(questionsActionFailure(error.message));
  }
}

/**
 * The generator watches the heroArticleSaga for event.
 */
export default function* watchQuestions() {
  yield takeLatest(QUESTIONS_REQUEST, questionsSaga);
}
