import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({route}) => {
  const {Username} = route.params;
  return (
    <View>
      <Text style={styles.text}>Welcome {Username}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
  },
});
