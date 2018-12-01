
import { SIGNUP } from '../constants/index';

const signUp = (userData) => ({
    type: SIGNUP.CREATE_ACCOUNT,
    userData
});

const signUpSuccess = user => ({
    type: SIGNUP.CREATE_ACCOUNT_SUCCESS,
    user
});

const signUpError = error => ({
    type: SIGNUP.CREATE_ACCOUNT_ERROR,
    error
});

export {
    signUp,
    signUpSuccess,
    signUpError
}