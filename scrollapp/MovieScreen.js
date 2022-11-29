import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const MovieScreen = () => {
  const route = useRoute();
  const data = route.params.item;
  //   console.log(data);
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w1280/${data.poster_path}`,
        }}
      />
      <ScrollView styles={styles.container}>
        <Text style={[styles.title, {fontWeight: '600'}]}>
          TITLE : {data.title}
        </Text>
        <Text style={[styles.title, {fontWeight: '600'}]}>
          Realase Date : {data.release_date}
        </Text>
        <Text style={styles.title}>Overview : {data.overview}</Text>
      </ScrollView>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    overflow: 'auto',
  },
  image: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: 400,
    width: 300,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    padding: 10,
    paddingHorizontal: 40,
  },
});
