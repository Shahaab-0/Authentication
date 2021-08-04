import axios from 'axios';
import {GET_EMAIL, GET_NAME, GET_PHONE, URL} from './ActionTypes';

export const getPhone = number => {
  return dispatch => {
    dispatch({
      type: GET_PHONE,
      payload: number,
    });
  };
};

export const getName = name => {
  return dispatch => {
    dispatch({
      type: GET_NAME,
      payload: name,
    });
  };
};
export const getEmail = email => {
  return dispatch => {
    dispatch({
      type: GET_EMAIL,
      payload: email,
    });
  };
};

export const registierNumber = (number, name, email) => {
  var data = new FormData();
  data.append('phone', number);
  data.append('name', name);
  data.append('email', email);
  return dispatch => {
    console.log('hello');
    axios({
      method: 'POST',
      url: URL + '/appApi/Register.php',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    }).then(response => {
      console.log(response);
    });
  };
};
