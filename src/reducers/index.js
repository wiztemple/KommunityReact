import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import singleQuestionReducer from './singleQuestionReducer';

export default combineReducers({
  questions: questionsReducer,
  signup: signupReducer,
  login: loginReducer,
  singleQuestion: singleQuestionReducer
});
