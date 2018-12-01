import { takeLatest, call, put } from 'redux-saga/effects';
import history from '../history';
import { SIGNUP } from '../store/constants/index';
import { registerUserApi } from '../api';
import { signUpError, signUpSuccess } from '../store/actions/authAction';


export function* signUpSaga(action) {
    try {
        let response = yield call(registerUserApi, action.userData);
        response = yield response.json();
        if (response.status === 'error') {
            yield put(signUpError(response.message));
        }
        yield put(signUpSuccess(response.data));
        yield history.push('/');
    } catch (error) {
        yield put(signUpError(response.message));
    }
}

export default function* watchSignUp() {
    yield takeLatest(SIGNUP.CREATE_ACCOUNT, signUpSaga);
}
