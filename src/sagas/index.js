import { all } from 'redux-saga/effects';

import watchQuestions from './questionsSaga';
import watchSignup from './signupSaga';

/**
 * The root saga
 */
function* rootSaga() {
  yield all([
    watchQuestions(),
    watchSignup
  ]);
}

export default rootSaga;
