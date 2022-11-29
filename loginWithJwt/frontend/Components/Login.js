import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from './CustomTextInput';

const Login = ({navigation}) => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const onLogin = async () => {
    const res = await fetch('http://192.168.1.54:3000/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({Username: Username, Password: Password}),
    });

    const json = await res.json();
    // console.log('result data', json);

    if (json.msg === 'unsucessful') {
      setUsername('');
      setPassword('');
      ToastAndroid.show('Invalid Username', ToastAndroid.TOP, 25, 50);
    } else {
      console.log('object');
      navigation.navigate('Home', {Username});
    }

    // console.log(`Username :${Username}  \n Password : ${Password}\n`);
    // console.log(Object.keys(result).length);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: 'black', marginBottom: 20}]}>
        LOGIN
      </Text>
      <CustomTextInput
        textStyle={false}
        placeHolder="Enter Username"
        onValueChange={value => setUsername(value)}
        value={Username}
      />
      <CustomTextInput
        textStyle={true}
        placeHolder="Enter Password"
        onValueChange={value => setPassword(value)}
        value={Password}
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
