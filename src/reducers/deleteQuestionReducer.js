import {
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE
} from '../actionTypes/deleteActionType.js';


const initialState = {
  deleting: false,
  deleted: false,
  question: null,
  error: null
};

const deleteQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
  case DELETE_QUESTION_REQUEST:
    return {
      ...state,
      deleting: true,
      deleted: false,
      error: null
    };
  case DELETE_QUESTION_SUCCESS:
    return {
      ...state,
      deleting: false,
      deleted: true,
    };
  case DELETE_QUESTION_FAILURE:
    return {
      ...state,
      deleting: false,
      deleted: false,
      question: null,
      error: action.payload
    };
  default:
    return state;
  }
};

export default deleteQuestionReducer;
