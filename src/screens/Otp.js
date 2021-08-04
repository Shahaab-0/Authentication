import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {verifyOtp, inputOtp} from '../actions/OtpAction';

const OTP = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../logo.png')} />
      <Text style={styles.text}>Enter OTP</Text>
      <TextInput
        placeholder="OTP"
        style={styles.input}
        placeholderTextColor="black"
        keyboardType="number-pad"
        value={props.userOtp}
        onChangeText={otp => {
          props.inputOtp(otp);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          props.verifyOtp(props.getUserNumber, props.userOtp, props.navigation);
        }}
        style={styles.otp}>
        <Text style={styles.otpText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2ebda',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginLeft: 40,
  },
  input: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    padding: 12,
    marginTop: 30,
    alignSelf: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: -50,
    marginBottom: 40,
  },
  otp: {
    marginTop: 30,
    backgroundColor: '#0f974f',
    borderRadius: 10,
    width: '85%',
    alignSelf: 'center',
  },
  otpText: {
    fontSize: 16,
    padding: 12,
    textAlign: 'center',
    color: 'white',
  },
  signUp: {
    marginLeft: 70,
    marginTop: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
  textSignup: {
    color: '#0f974f',
    fontSize: 16,
    marginTop: 15,
    marginLeft: 5,
  },
});

function mapStateToProps(state) {
  return {
    apiToken: state.verifyOtp.token,
    userOtp: state.verifyOtp.otp,
    getUserNumber: state.login.number,
  };
}

export default connect(mapStateToProps, {verifyOtp, inputOtp})(OTP);
