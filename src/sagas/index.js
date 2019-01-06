import { all } from 'redux-saga/effects';

import watchQuestions from './questionsSaga';
import watchSignup from './signupSaga';
import watchSingleQuestionSaga from './singleQuestionSaga';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchQuestions(),
    watchSignup(),
    watchSingleQuestionSaga()
  ]);
}

export default rootSaga;
