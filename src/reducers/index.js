import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import OtpReducer from './OtpReducer';

export default combineReducers({
  register: RegisterReducer,
  login: LoginReducer,
  verifyOtp: OtpReducer,
});
