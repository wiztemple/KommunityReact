import {
  POST_ANSWER_REQUEST,
  POST_ANSWER_SUCCESS,
  POST_ANSWER_FAILURE
} from '../actionTypes/postAnswerActionType';

export const postAnswerRequestAction = (answer, id) => ({
  type: POST_ANSWER_REQUEST,
  payload: {
    answer,
    id
  }
});

export const postAnswerActionSuccess = payload => ({
  type: POST_ANSWER_SUCCESS,
  payload
});

export const postAnswerActionFailure = response => ({
  type: POST_ANSWER_FAILURE,
  error: response.message
});
