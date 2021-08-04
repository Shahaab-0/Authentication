import {GET_EMAIL, GET_NAME, GET_PHONE} from '../actions/ActionTypes';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PHONE:
      return {...state, phone: action.payload};
    case GET_NAME:
      return {...state, name: action.payload};
    case GET_EMAIL:
      return {...state, email: action.payload};
    default:
      return state;
  }
};
