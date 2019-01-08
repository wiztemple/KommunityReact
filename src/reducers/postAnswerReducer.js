import {
  POST_ANSWER_REQUEST,
  POST_ANSWER_SUCCESS,
  POST_ANSWER_FAILURE
} from '../actionTypes/postAnswerActionType';

const initialState = {
  posting: false,
  error: '',
  success: '',
  payload: {}
};

const postAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
  case POST_ANSWER_REQUEST:
    return { ...state, posting: true, payload: action.payload };
  case POST_ANSWER_SUCCESS:
    return { ...state, posting: false, success: action.success };
  case POST_ANSWER_FAILURE:
    return { ...state, posting: false, error: action.error };
  default:
    return state;
  }
};

export default postAnswerReducer;
