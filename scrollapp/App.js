import React, {useState} from 'react';
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
];

let stopFetchMore = true;

const CheckList = ({navigation}) => {
  const [data, setData] = useState(DATA);
  //   const addElement = () => {
  //     const d = [
  //       {
  //         id: 3,
  //         name: 'popular',
  //       },
  //       {
  //         id: 4,
  //         name: 'top_rated',
  //       },
  //     ];

  //     if (!stopFetchMore) {
  //       if (data.length === 4) return;
  //       setData([...data, ...d]);
  //       stopFetchMore = true;
  //       // setTimeout(() => setData([...data, ...d]), 3000);
  //     }
  //   };

  const onScroll = ({nativeEvent}) => {
    const d = [
      {
        id: 3,
        name: 'popular',
      },
      {
        id: 4,
        name: 'top_rated',
      },
    ];
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;
    //  console.log(currentScrollPosition);
    if (currentScrollPosition === 76 && stopFetchMore) {
      setData([...data, d[0]]);
    }
    if (currentScrollPosition === 462 && stopFetchMore) {
      setData([...data, d[1]]);
      stopFetchMore = false;
    }
  };

  return (
    <FlatList
      onScroll={onScroll}
      keyExtractor={item => item.id}
      data={data}
      renderItem={({item}) => (
        <FetchList secName={item.name} navigation={navigation} />
      )}
      // onEndReached={addElement}
      // // onEndReachedThreshold={0.5}
      // onScrollBeginDrag={() => {
      //   //   stopFetchMore = false;
      // }}
    />
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  //   console.log(DATA['name']);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#E97777',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Movies"
          component={CheckList}
          //  options={{title: 'User List'}}
        />
        <Stack.Screen
          name="MovieScreen"
          component={MovieScreen}
          options={{title: 'MovieScreen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>

    //  <FlatList
    //    keyExtractor={item => item.id}
    //    data={DATA}
    //    renderItem={({item}) => <FetchList secName={item.name} />}
    //  />
  );
};

export default App;
