import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';

const videoData = [
  {
    id: 1,
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumb: require('./assets/BigBuckBunny.jpg'),
  },
  {
    id: 2,
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumb: require('./assets/ElephantsDream.jpeg'),
  },
  {
    id: 3,
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumb: require('./assets/ForBiggerBlazes.jpeg'),
  },
  {
    id: 4,
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumb: require('./assets/BigBuckBunny.jpg'),
  },
];

const App = () => {
  return (
    <View>
      <FlatList
        data={videoData}
        keyExtractor={key => key.id}
        renderItem={({item}) => (
          <View style={styles.videobox}>
            <VideoPlayer
              video={{
                uri: item.src,
              }}
              autoplay={false}
              thumbnail={item.thumb}
            />
          </View>
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  videobox: {marginBottom: 30},
});
