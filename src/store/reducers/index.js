import { combineReducers } from 'redux';
import signUpReducer from './authReducer';

const rootReducer = combineReducers({
    auth: signUpReducer
})

export default rootReducer;
