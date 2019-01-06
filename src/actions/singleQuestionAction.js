import {
  SINGLE_QUESTION_REQUEST,
  SINGLE_QUESTION_SUCCESS,
  SINGLE_QUESTION_FAILURE
} from '../actionTypes/singleQuestionActionType';

export const singleQuestionAction = () => ({
  type: SINGLE_QUESTION_REQUEST,
});

export const singleQuestionActionSuccess = question => ({
  type: SINGLE_QUESTION_SUCCESS,
  payload: question
});

export const singleQuestionActionFailure = error => ({
  type: SINGLE_QUESTION_FAILURE,
  payload: error
});
