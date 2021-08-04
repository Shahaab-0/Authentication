import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {
  getName,
  getEmail,
  getPhone,
  registierNumber,
} from '../actions/RegisterAction';

const Register = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../logo.png')} />
      <Text style={styles.text}>Register</Text>
      <TextInput
        placeholder="Mobile"
        maxLength={10}
        style={styles.input}
        placeholderTextColor="black"
        keyboardType="number-pad"
        value={props.getUserPhone}
        onChangeText={e => {
          props.getPhone(e);
        }}
      />
      <TextInput
        placeholder="Name"
        style={styles.input}
        placeholderTextColor="black"
        value={props.getUserName}
        onChangeText={name => {
          props.getName(name);
        }}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="black"
        value={props.getUserEmail}
        onChangeText={number => {
          props.getEmail(number);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.registierNumber(
            props.getUserPhone,
            props.getUserName,
            props.getUserEmail,
          );
        }}
        style={styles.otp}>
        <Text style={styles.otpText}>Register</Text>
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
    getUserName: state.register.name,
    getUserPhone: state.register.phone,
    getUserEmail: state.register.email,
  };
}

export default connect(mapStateToProps, {
  getEmail,
  getPhone,
  getName,
  registierNumber,
})(Register);
