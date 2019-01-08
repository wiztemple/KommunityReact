import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import createQuestionReducer from './createQuestionReducer';
import singleQuestionReducer from './singleQuestionReducer';
import postAnswerReducer from './postAnswerReducer';
import deleteQuestionReducer from './deleteQuestionReducer';

export default combineReducers({
  questions: questionsReducer,
  signup: signupReducer,
  login: loginReducer,
  create: createQuestionReducer,
  singleQuestion: singleQuestionReducer,
  postAnswer: postAnswerReducer,
  deleteQuestion: deleteQuestionReducer
});
