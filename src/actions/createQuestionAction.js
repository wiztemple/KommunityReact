import {
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE
} from '../actionTypes/createQuestionActionType';

export const createQuestionRequestAction = payload => ({
  type: CREATE_QUESTION_REQUEST,
  payload
});

export const createQuestionActionSuccess = response => ({
  type: CREATE_QUESTION_SUCCESS,
  success: response.message
});

export const createQuestionActionFailure = response => ({
  type: CREATE_QUESTION_FAILURE,
  error: response.message
});
