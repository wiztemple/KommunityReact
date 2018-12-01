import { all } from 'redux-saga/effects';

import watchSignup from './signupSaga';

function* rootSaga() {
    yield all([
        watchSignup()
    ])
}

export default rootSaga;
