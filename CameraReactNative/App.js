import React, {Component} from 'react';
import {CameraScreen, CameraType} from 'react-native-camera-kit';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CameraScreen
        ref={ref => (this.camera = ref)}
        cameraType={CameraType.Back} // front/back(default)
      />
    );
  }
}
