import {GET_OTP, INPUT_OTP, VERIFY_OTP} from '../actions/ActionTypes';

const INITIAL_STATE = {
  otp: '',
  token: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_OTP:
      return {...state, otp: action.payload};
    case VERIFY_OTP:
      return {...state, token: action.payload};

    default:
      return state;
  }
};
