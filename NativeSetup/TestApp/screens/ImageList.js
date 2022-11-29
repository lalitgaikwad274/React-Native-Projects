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
console.log(faker.image.sports());

const ImageList = () => {
  const show = name => {
    Alert.alert(name);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={Array(10)
          .fill()
          .map((_, i) => i + 11)}
        numColumns={2}
        // contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <View style={styles.container} onPress={() => show(item.name)}>
            <Image
              style={styles.image}
              source={{uri: faker.image.sports(340, 340, true)}}
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ImageList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    marginVertical: 20,
    resizeMode: 'cover',
    height: 200,
    width: '90%',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    alignSelf: 'center',
  },
});
