import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { CREATE_QUESTION_REQUEST } from
  '../actionTypes/createQuestionActionType';
import {
  createQuestionActionSuccess,
  createQuestionActionFailure
} from '../actions/createQuestionAction';
import { updateNewQuestion } from '../actions/questionsAction';
import { getItem } from '../utils/localStorage';

/**
 * Handles the call to create question endpoint
 * @param {*} payload question data
 * @returns {promise}
 */
const createQuestion = (payload) => {
  return axios.post(`${process.env.API_URL}/question`, payload, {
    headers: {
      authorization: `Bearer ${getItem('token')}`
    }
  });
};

/**
 * The generator function for create question saga
 * @param {object} action
 */
export function* createQuestionSaga(action) {
  try {
    const { data } = yield call(createQuestion, action.payload);
    const {
      userId,
      questionBody,
      ...rest
    } = data.questionObj;
    yield put(createQuestionActionSuccess(data));
    yield put(updateNewQuestion({
      ...rest,
      question_body: questionBody,
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
      user_id: userId,
    }));
  } catch (error) {
    yield put(createQuestionActionFailure(error.message));
  }
}

/**
 * The generator watches the createQuestionSaga for event.
 */
export default function* watchCreateQuestion() {
  yield takeLatest(CREATE_QUESTION_REQUEST, createQuestionSaga);
}
