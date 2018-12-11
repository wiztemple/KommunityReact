import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import signupReducer from './signupReducer';

export default combineReducers({
  questions: questionsReducer,
  signup: signupReducer
});
