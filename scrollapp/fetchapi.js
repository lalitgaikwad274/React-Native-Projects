import React, {useEffect, useState} from 'react';
import {BASE_URL} from './env';
// import Toast from 'react-native-simple-toast';

import {
  Image,
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const FetchList = ({secName, navigation}) => {
  // console.log(secName);
  const [movieData, setMovieData] = useState();
  //'https://api.themoviedb.org/3/tv/popular?api_key=0b95d03811a07be71328edc89b4dc265',
  const name = secName.toUpperCase();

  const getMovieData = async () => {
    const apiKey = '?api_key=0b95d03811a07be71328edc89b4dc265';
    const baseUrl = BASE_URL + '/' + secName + apiKey;
    console.log('env', baseUrl);

    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      setMovieData(data.results);
    } catch (error) {
      console.log('error', error);
    }
  };

  // const onalert = str => {
  //   navigation.navigate('MovieScreen');

  //   // Toast.show(str, Toast.SHORT);
  // };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <View style={styles.container1}>
      <Text style={styles.text}>{name}</Text>
      <FlatList
        horizontal
        keyExtractor={item => item.id}
        data={movieData}
        renderItem={({item}) => (
          <TouchableHighlight
            style={styles.container}
            onPress={() => navigation.navigate('MovieScreen', {item})}>
            <Image
              style={styles.image}
              source={{
                uri: `https://image.tmdb.org/t/p/w1280/${item.poster_path}`,
              }}
            />
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

export default FetchList;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    marginTop: 10,
  },
  container: {
    flex: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    paddingLeft: 10,
    fontWeight: '700',
    color: 'black',
    textDecorationStyle: 'solid',
    backgroundColor: '#FCE2DB',
    padding: 6,
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 15,
    color: 'black',
  },
  image: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: 300,
    width: 200,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    alignSelf: 'center',
  },
});
