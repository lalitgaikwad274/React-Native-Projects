import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const List = ({name, id, AnimationName}) => {
  return (
    <Animatable.View
      animation={AnimationName}
      duration={1000}
      delay={id % 10 === 0 ? 10 * 100 : (id % 10) * 100}>
      <View style={styles.container}>
        <Text style={styles.text1}>{id}</Text>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Animatable.View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#6DBDFF',
    marginTop: 10,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
    color: 'white',
    fontSize: 20,
  },
  text1: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#233092',
    height: 30,
    width: 30,
    borderRadius: 50,
    textAlign: 'center',
  },
});
