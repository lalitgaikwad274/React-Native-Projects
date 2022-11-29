import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions, TextInput} from 'react-native';
import MapView, {Callout} from 'react-native-maps';
import {Marker} from 'react-native-maps';

const App = () => {
  const [region, setRegion] = useState({
    latitude: 18.5204,
    longitude: 73.8567,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     region: {
  //       latitude: 18.5204,
  //       longitude: 73.8567,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     },
  //     // lat: 18.5204,
  //     // log: 73.8567,
  //   };

  // onRegionChange(data) {
  //   console.log('object', data);
  //   console.log('region', this.state.region);
  //   // this.setState({data});
  // }
  return (
    <View style={styles.MainContainer}>
      <MapView
        style={styles.mapStyle}
        region={region}
        onRegionChangeComplete={data => setRegion(data)}>
        <Marker
          coordinate={{latitude: region.latitude, longitude: region.longitude}}
          title={'Pune'}
          description={'Pune'}
        />
      </MapView>
      <View style={styles.screen}>
        <TextInput style={styles.text} />
        {/* <Text style={styles.text}>latitude : {region.latitude}</Text>
        <Text style={styles.text}>longitude : {region.longitude}</Text> */}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  screen: {
    backgroundColor: 'black',
    width: '90%',
    padding: 10,
    top: 20,
    opacity: 0.8,
    position: 'absolute',
  },
});
