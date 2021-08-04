import {GET_NUMBER, GET_OTP} from '../actions/ActionTypes';

const INITIAL_STATE = {
  number: '',
  otp: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NUMBER:
      return {...state, number: action.payload};
    case GET_OTP:
      return {...state, otp: action.payload};
    default:
      return state;
  }
};
