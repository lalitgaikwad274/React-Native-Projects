import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import UserList from './screens/UserList';
import ImageList from './screens/ImageList';
import MovieList from './screens/MovieList';
import CityList from './screens/Cities';

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'user',
      title: 'Users',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {key: 'sport', title: 'Sports', focusedIcon: 'album'},
    {key: 'food', title: 'Food', focusedIcon: 'history'},
    {
      key: 'Cities',
      title: 'Cities',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    user: UserList,
    sport: ImageList,
    food: MovieList,
    Cities: CityList,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
