import { all } from 'redux-saga/effects';
import watchQuestions from './questionsSaga';
import watchSignup from './signupSaga';
import watchLogin from './loginSaga';
import watchCreateQuestion from './createQuestionSaga';
import watchPostAnswer from './postAnswerSaga';
import watchSingleQuestionSaga from './singleQuestionSaga';
import watchDeleteQuestionSaga from './deleteQuestionSaga';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchQuestions(),
    watchSignup(),
    watchLogin(),
    watchCreateQuestion(),
    watchSingleQuestionSaga(),
    watchPostAnswer(),
    watchDeleteQuestionSaga()
  ]);
}

export default rootSaga;
