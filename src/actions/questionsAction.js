import {
  QUESTIONS_REQUEST,
  QUESTIONS_SUCCESS,
  QUESTIONS_FAILURE
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
