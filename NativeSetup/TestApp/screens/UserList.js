import React from 'react';
import {Text, View, FlatList, SafeAreaView, StyleSheet} from 'react-native';

const userData = [
  {
    id: 1,
    name: 'lalit',
  },
  {
    id: 2,
    name: 'prem',
  },
  {
    id: 3,
    name: 'sagar',
  },
  {
    id: 4,
    name: 'yogesh',
  },
  {
    id: 5,
    name: 'Balu',
  },
];

const UserList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={userData}
        renderItem={({item}) => (
          <View>
            <Text style={styles.box}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    textAlign: 'center',
    backgroundColor: 'blue',
    marginTop: 20,
    padding: 20,
    fontSize: 30,
    color: 'white',
    borderRadius: 20,
  },
});
