/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Node} from 'react';
import {Button, StyleSheet, Text, useColorScheme, View} from 'react-native';

import BottomNavigationComponent from './Components/bottomNavigation';
import MyComponent from './Components/myComponent';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [count, setCount] = useState(0);

  return (
    // <View style={styles.box}>
    //         <Button
    //           style={styles.center}
    //           title="Increase"
    //           onPress={() => setCount(count + 1)}
    //         />
    //         <Text style={styles.center}>{count}</Text>
    //         <Button title="Decrease" onPress={() => setCount(count - 1)} />
    //       </View>
    <BottomNavigationComponent />
    // <MyComponent />
  );
};

const styles = StyleSheet.create({
  center: {fontSize: 40, alignSelf: 'center'},
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 60,
    alignItems: 'center',
  },
});

export default App;
