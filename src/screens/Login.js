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
import {getNumber, sendOtp} from '../actions/LoginAction';

const Login = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../logo.png')} />
      <Text style={styles.text}>Log In</Text>
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        placeholderTextColor="black"
        maxLength={10}
        keyboardType="number-pad"
        value={props.getUserNumber}
        onChangeText={number => {
          props.getNumber(number);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          props.sendOtp(props.getUserNumber, props.navigation);
        }}
        style={styles.otp}>
        <Text style={styles.otpText}>Send OTP</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.signUp}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Register');
          }}>
          <Text style={styles.textSignup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
    getUserNumber: state.login.number,
    getUserOtp: state.login.otp,
  };
}

export default connect(mapStateToProps, {getNumber, sendOtp})(Login);
