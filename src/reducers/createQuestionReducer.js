import {
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE,
} from '../actionTypes/createQuestionActionType';

const initialState = {
  creating: false,
  error: '',
  success: '',
  payload: {}
};

const createQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
  case CREATE_QUESTION_REQUEST:
    return { ...state, creating: true, payload: action.payload };
  case CREATE_QUESTION_SUCCESS:
    return { ...state, creating: false, success: action.success };
  case CREATE_QUESTION_FAILURE:
    return { ...state, creating: false, error: action.error };
  default:
    return state;
  }
};

export default createQuestionReducer;
