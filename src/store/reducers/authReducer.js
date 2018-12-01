import { SIGNUP }  from '../constants/index';


const initialState = {
    signing_up: false,
    user: null,
    error: null
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP.CREATE_ACCOUNT:
            return {...state, signin_up: true }
        case SIGNUP.CREATE_ACCOUNT_SUCCESS:
            return { ...state, user: action.user, signin_up: false , error: null};
        case SIGNUP.CREATE_ACCOUNT_ERROR:
            return { ...state, signin_up: false, error: action.error, user: null }
        default:
            return state;
            
    }
}

export default signUpReducer;
