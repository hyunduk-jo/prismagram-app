import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import PhotoNavigation from './PhotoNavigation';
import MessageNavigation from './MessageNavigation';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator mode="modal">
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="PhotoNavigation" component={PhotoNavigation} />
      <Stack.Screen name="MessageNavigation" component={MessageNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
)