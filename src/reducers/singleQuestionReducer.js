import {
  SINGLE_QUESTION_REQUEST,
  SINGLE_QUESTION_SUCCESS,
  SINGLE_QUESTION_FAILURE
} from '../actionTypes/singleQuestionActionType';

import {
  POST_ANSWER_SUCCESS,
} from '../actionTypes/postAnswerActionType.js';

const initialState = {
  fetching: false,
  question: null,
  answers: null,
  error: null
};

const singleQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
  case SINGLE_QUESTION_REQUEST:
    return {
      ...state,
      fetching: true,
      error: null
    };
  case SINGLE_QUESTION_SUCCESS:
    return {
      ...state,
      fetching: false,
      question: action.payload.question[0],
      answers: action.payload.answers
    };
  case SINGLE_QUESTION_FAILURE:
    return {
      ...state,
      fetching: false,
      question: null,
      error: action.payload
    };
  case POST_ANSWER_SUCCESS:
    return {
      ...state,
      answers: [action.payload, ...state.answers]
    };
  default:
    return state;
  }
};

export default singleQuestionReducer;
