import Video from 'react-native-video';
import video from './mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-medium.mp4';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Video
        source={video} // the video file
        // paused={false} // make it start
        // style={styles.backgroundVideo} // any style you want
        repeat={true} // make it a loop
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 400,
    width: '100%',
  },
});
export default App;
