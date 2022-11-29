import React from 'react';
import {faker} from '@faker-js/faker';

import {
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Alert,
  View,
} from 'react-native';

const MovieList = () => {
  const show = name => {
    Alert.alert(name);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={Array(10)
          .fill()
          .map((_, i) => i + 1)}
        numColumns={2}
        // contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <View style={styles.container} onPress={() => show(item.name)}>
            <Image
              style={styles.image}
              source={{uri: faker.image.food(0, 0, true)}}
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    marginVertical: 10,
    resizeMode: 'contain',
    height: 200,
    width: '90%',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    alignSelf: 'center',
  },
});
