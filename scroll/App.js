import React from 'react';
import {FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieScreen from './MovieScreen';
import FetchList from './fetchapi';

const DATA = [
  {
    id: 1,
    name: 'upcoming',
  },
  {
    id: 2,
    name: 'now_playing',
  },
  {
    id: 3,
    name: 'popular',
  },
  {
    id: 4,
    name: 'top_rated',
  },
];

const CheckList = () => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={DATA}
      renderItem={({item}) => <FetchList secName={item.name} />}
    />
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  console.log(DATA['name']);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CheckList"
          component={CheckList}
          //  options={{title: 'User List'}}
        />
        <Stack.Screen
          name="MovieScreen"
          component={MovieScreen}
          //  options={{title: 'Home'}}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <FlatList
    //   keyExtractor={item => item.id}
    //   data={DATA}
    //   renderItem={({item}) => <FetchList secName={item.name} />}
    // />
  );
};

// const styles = StyleSheet.create({});

export default App;
