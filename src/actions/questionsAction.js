import {
  QUESTIONS_REQUEST,
  QUESTIONS_SUCCESS,
  QUESTIONS_FAILURE,
  UPDATE_NEW_QUESTION
} from '../actionTypes/questionsActionType';

export const questionsAction = () => ({
  type: QUESTIONS_REQUEST,
});

export const questionsActionSuccess = questions => ({
  type: QUESTIONS_SUCCESS,
  questions
});

export const questionsActionFailure = error => ({
  type: QUESTIONS_FAILURE,
  error
});

export const updateNewQuestion = payload => ({
  type: UPDATE_NEW_QUESTION,
  payload
});
