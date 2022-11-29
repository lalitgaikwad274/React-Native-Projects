import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {firebase} from '@react-native-firebase/database';

const Insert = () => {
  // console.log('object');
  const [Email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onInsert = () => {
    //dynamic linking to database
    const reference = firebase
      .app()
      .database('https://database-6b21c-default-rtdb.firebaseio.com/')
      .ref('/users/');
    console.log(Email, ' ', password);
    reference
      .push({
        email: Email,
        password: password,
      })
      .then(() => {
        console.log('User data set ');
      });

    // reference.once('value').then(snapshot => {
    //   console.log('User data: ', snapshot.val());
    // });

    //Read Data from Database
    // database()
    //   .ref('/users/2')
    //   .once('value')
    //   .then(snapshot => {
    //     console.log('User data: ', snapshot.val());
    //   });

    //Write Data to Database
    // database()
    //   .ref('/users/2')
    //   .set({
    //     email: Email,
    //     password: password,
    //   })
    //   .then(() => console.log('Data set.'));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="Enter Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Enter Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={onInsert}>
        <Text style={styles.text}>Insert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Insert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
  },
  textinput: {
    margin: 10,
    backgroundColor: 'white',
    width: '90%',
    fontSize: 30,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#3262e6',
    borderRadius: 10,
    width: '90%',
  },
});
