import axios from 'axios';
import {GET_NUMBER, GET_OTP, URL} from './ActionTypes';

export const getNumber = number => {
  return dispatch => {
    dispatch({
      type: GET_NUMBER,
      payload: number,
    });
  };
};

export const sendOtp = (number, navigation) => {
  var data = new FormData();
  data.append('phone', number);
  console.log('number', number);
  return dispatch => {
    axios({
      method: 'POST',
      url: URL + '/appApi/Login.php',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    }).then(response => {
      console.log(response.data);
      dispatch({
        type: GET_OTP,
        payload: response.data.response.status,
      });
      {
        if (response.data.response.status) {
          navigation.navigate('OTP');
        }
      }
    });
  };
};
