import {StyleSheet} from 'react-native';
import React from 'react';
import Insert from './Components/Insert';

const App = () => {
  return <Insert />;
};

export default App;

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
