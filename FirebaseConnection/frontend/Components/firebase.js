// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyD9rjPDzGLyyFO26gVJr_nGI1G-Sw50V2Q',
  authDomain: 'fir-demo-93225.firebaseapp.com',
  projectId: 'fir-demo-93225',
  storageBucket: 'fir-demo-93225.appspot.com',
  messagingSenderId: '221006525507',
  appId: '1:221006525507:web:9b3ac4d4b029703879d0f6',
  measurementId: 'G-XLHJDY8HM8',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export {auth};
