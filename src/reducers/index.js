import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import signupReducer from './signupReducer';
import singleQuestionReducer from './singleQuestionReducer';

export default combineReducers({
  questions: questionsReducer,
  signup: signupReducer,
  singleQuestion: singleQuestionReducer
});
