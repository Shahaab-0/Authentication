import axios from 'axios';
import {INPUT_OTP, URL, VERIFY_OTP} from './ActionTypes';

export const inputOtp = otp => {
  console.log(otp);
  return dispatch => {
    dispatch({
      type: INPUT_OTP,
      payload: otp,
    });
  };
};

export const verifyOtp = (number, otp, navigation) => {
  return dispatch => {
    var data = new FormData();
    data.append('phone', number);
    data.append('otp', otp);

    axios({
      method: 'POST',
      url: URL + '/appApi/VerifyOTP.php',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    }).then(response => {
      console.log(response.data.response);
      dispatch({
        type: VERIFY_OTP,
        payload: response.data.response.userToken,
      });
      {
        if (response.data.response.userToken.length > 1) {
          navigation.navigate('Cart');
        }
      }
    });
  };
};
