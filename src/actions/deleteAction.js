import {
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE
} from '../actionTypes/deleteActionType';

export const deleteQuestionActionRequest = id => ({
  type: DELETE_QUESTION_REQUEST,
  payload: id
});

export const deleteQuestionActionSuccess = question => ({
  type: DELETE_QUESTION_SUCCESS,
  payload: question
});

export const deleteQuestionActionFailure = error => ({
  type: DELETE_QUESTION_FAILURE,
  payload: error
});
