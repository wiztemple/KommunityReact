import {
  QUESTIONS_REQUEST,
  QUESTIONS_SUCCESS,
  QUESTIONS_FAILURE,
  UPDATE_NEW_QUESTION
} from '../actionTypes/questionsActionType';

const initialState = {
  fetching: false,
  questions: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case QUESTIONS_REQUEST:
    return { ...state, fetching: true, error: null };
  case QUESTIONS_SUCCESS:
    return { ...state, fetching: false, questions: action.questions };
  case QUESTIONS_FAILURE:
    return {
      ...state, fetching: false, questions: null, error: action.error
    };
  case UPDATE_NEW_QUESTION:
    return {
      ...state,
      questions: [action.payload, ...state.questions]
    };
  default:
    return state;
  }
};
