import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { DELETE_QUESTION_REQUEST } from
  '../actionTypes/deleteActionType.js';
import {
  deleteQuestionActionSuccess,
  deleteQuestionActionFailure
} from '../actions/deleteAction.js';
import { getItem } from '../utils/localStorage';

const deleteQuestion = (id) => {
  return axios.delete(`${process.env.API_URL}/question/${id}`, {
    headers: {
      authorization: `Bearer ${getItem('token')}`
    }
  });
};

/**
 * The generator function for delete question saga
 * @param {object} action
 */
export function* deleteQuestionSaga(action) {
  try {
    const { data } = yield call(deleteQuestion, action.payload);
    yield put(deleteQuestionActionSuccess(data.data));
  } catch (error) {
    yield put(deleteQuestionActionFailure(error.message));
  }
}

/**
 * The generator watches the deleteQuestionSaga for event.
 */
export default function* watchDeleteQuestionSaga() {
  yield takeLatest(DELETE_QUESTION_REQUEST, deleteQuestionSaga);
}
