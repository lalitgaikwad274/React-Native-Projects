import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import TodoForm from './Screens/TodoForm';
import TodoContent from './Screens/TodoContent';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TODO APP" component={Home} />
        <Stack.Screen name="TodoForm" component={TodoForm} />
        <Stack.Screen name="TodoContent" component={TodoContent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
