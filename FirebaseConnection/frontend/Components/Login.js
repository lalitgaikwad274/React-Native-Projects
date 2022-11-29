import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from './CustomTextInput';
import {auth} from './firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import database from '@react-native-firebase/database';
const Login = ({navigation}) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userData => {
        const user = userData.user;
        console.log(user.email);
      })
      .catch(err => alert('error', err.message));

    navigation.navigate('Home', {email});
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: 'black', marginBottom: 20}]}>
        LOGIN
      </Text>
      <CustomTextInput
        textStyle={false}
        placeHolder="Enter Email"
        onValueChange={value => setUsername(value)}
        value={email}
      />
      <CustomTextInput
        textStyle={true}
        placeHolder="Enter Password"
        onValueChange={value => setPassword(value)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={[styles.text, {color: 'black', marginTop: 20}]}>
          Create an account
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 20,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#009bff',
    padding: 10,
    marginTop: 20,
    borderRadius: 120,
  },
  text: {
    alignSelf: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});
