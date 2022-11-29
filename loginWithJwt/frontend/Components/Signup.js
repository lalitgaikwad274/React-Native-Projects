import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Login';
import CustomTextInput from './CustomTextInput';
// import axios from 'axios';

const Base_Url = 'localhost:3000/signup';

const Signup = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onSignup = () => {
    fetch('http://192.168.1.54:3000/signup', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: username,
        email: Email,
        password: Password,
      }),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log('error', res);
      });

    setEmail('');
    setPassword('');
    setUsername('');
    navigation.navigate('Login');
  };

  const validateEmail = text => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: 'black', marginBottom: 20}]}>
        SIGNUP
      </Text>
      <CustomTextInput
        textStyle={false}
        placeHolder="Enter Username"
        onValueChange={value => setUsername(value)}
        value={username}
      />
      <CustomTextInput
        textStyle={false}
        placeHolder="Enter Email"
        onValueChange={value => setEmail(value)}
        value={Email}
      />
      <CustomTextInput
        textStyle={false}
        placeHolder="Enter Password"
        onValueChange={value => setPassword(value)}
        value={Password}
      />

      <TouchableOpacity style={styles.button} onPress={onSignup}>
        <Text style={styles.text}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const currstyles = StyleSheet.create({});
