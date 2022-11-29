import React from 'react';
import {
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const imageData = [
  {
    id: 1,
    key: require('../assets/images/dam.jpeg'),
    name: 'Gangapur Dam nashik',
  },
  {
    id: 2,
    key: require('../assets/images/devi.jpeg'),
    name: 'Saptshurngi Devi',
  },
  {
    id: 3,
    key: require('../assets/images/temple.jpeg'),
    name: 'Sundarnarayan Temple',
  },
  {
    id: 4,
    key: require('../assets/images/leni.jpeg'),
    name: 'Pandav Leni Caves',
  },
];

const ImageList = () => {
  const show = name => {
    Alert.alert(name);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={imageData}
        renderItem={({item}) => (
          <TouchableOpacity
            styel={styles.container}
            onPress={() => show(item.name)}>
            <Image
              style={{
                marginVertical: 20,
                resizeMode: 'cover',
                height: 200,
                width: '90%',
                borderWidth: 2,
                borderColor: 'grey',
                borderRadius: 10,
                alignSelf: 'center',
              }}
              source={item.key}></Image>
          </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
