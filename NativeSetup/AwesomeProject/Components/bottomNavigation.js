import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import UserList from '../screens/UserList';
import ImageList from '../screens/ImageList';

const AlbumsRoute = () => <Text>Albums</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const BottomNavigationComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'Users',
      title: 'Users',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {key: 'albums', title: 'Albums', focusedIcon: 'album'},
    {key: 'Places', title: 'Places', focusedIcon: 'album'},
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Users: UserList,
    albums: AlbumsRoute,
    Places: ImageList,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigationComponent;
