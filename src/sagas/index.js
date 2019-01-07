import { all } from 'redux-saga/effects';
import watchQuestions from './questionsSaga';
import watchSignup from './signupSaga';
import watchLogin from './loginSaga';
import watchSingleQuestionSaga from './singleQuestionSaga';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchQuestions(),
    watchSignup(),
    watchLogin(),
    watchSingleQuestionSaga()
  ]);
}

export default rootSaga;
